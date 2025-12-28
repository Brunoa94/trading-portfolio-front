export const FuturisticTheme = {
  // Base containers with glassmorphism effect
  Container: {
    Base: "relative bg-black/20 backdrop-blur-sm border rounded-md transition-all duration-300",
    Interactive: "relative group bg-black/20 backdrop-blur-sm border rounded-md transition-all duration-300",
    Card: "relative bg-black/20 backdrop-blur-sm border border-gray-500/20 rounded-md",
  },

  // Status-based styling (positive/negative)
  Status: {
    Positive: {
      glow: "shadow-green-500/20",
      border: "border-green-500/30",
      gradient: "from-green-500/10 to-emerald-500/10",
      iconGradient: "from-green-500/20 to-emerald-500/20",
      statusBar: "from-green-400 to-green-600",
      accent: "via-green-400/50",
    },
    Negative: {
      glow: "shadow-red-500/20",
      border: "border-red-500/30",
      gradient: "from-red-500/10 to-pink-500/10",
      iconGradient: "from-red-500/20 to-pink-500/20",
      statusBar: "from-red-400 to-red-600",
      accent: "via-red-400/50",
    },
    Neutral: {
      glow: "shadow-blue-500/20",
      border: "border-blue-500/30",
      gradient: "from-blue-500/10 to-purple-500/10",
      iconGradient: "from-blue-500/20 to-purple-500/20",
      statusBar: "from-blue-400 to-blue-600",
      accent: "via-blue-400/50",
    },
  },

  // Interactive elements
  Interactive: {
    IconContainer: "relative group transition-all duration-300 hover:scale-110",
    IconGlow: "absolute inset-0 rounded-full blur-md group-hover:blur-lg transition-all duration-300",
    IconOverlay: "absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent",
    HoverBackground: "absolute inset-0 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300",
    HoverBorder: "group-hover:border-opacity-60 transition-all duration-300",
    AccentLine: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300",
  },

  // Special containers for different data types
  Symbol: {
    Container: "relative group bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg group-hover:border-cyan-400/40 transition-all duration-300 flex items-center gap-2",
    Background: "absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300",
    AccentLine: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent",
    Icon: "text-cyan-400/60 group-hover:text-cyan-300/80 transition-all duration-300 text-sm",
  },

  // Table-specific styles
  Table: {
    Cell: "py-6",
    CellWithIcon: "relative py-6",
    CellWithSymbol: "px-6 py-6",
    StatusBar: "h-full w-1 bg-gradient-to-b rounded-full shadow-lg",
  },

  // Padding and spacing
  Padding: {
    Container: "px-4 py-3",
    ContainerLarge: "px-6 py-4",
    Cell: "px-4 py-3",
  },

  // Typography
  Typography: {
    Mono: "font-mono",
    Glow: "text-shadow-lg",
  },

  // Animation and transitions
  Animation: {
    Smooth: "transition-all duration-300",
    Scale: "hover:scale-110",
    Glow: "group-hover:blur-lg",
  },
};

// Utility functions for dynamic styling
export const getFuturisticStatusStyles = (isPositive?: boolean, isNeutral: boolean = false) => {
  if (isNeutral) return FuturisticTheme.Status.Neutral;
  return isPositive ? FuturisticTheme.Status.Positive : FuturisticTheme.Status.Negative;
};

export const buildFuturisticContainer = (statusStyles: any, interactive: boolean = false) => {
  const baseContainer = interactive
    ? FuturisticTheme.Container.Interactive
    : FuturisticTheme.Container.Base;

  return `${baseContainer} ${statusStyles.border} ${statusStyles.glow}`;
};

export const buildStatusBar = (statusStyles: any) => {
  return `${FuturisticTheme.Table.StatusBar} bg-gradient-to-b ${statusStyles.statusBar} ${statusStyles.glow}`;
};

export const buildIconContainer = (statusStyles: any) => {
  return {
    container: `${FuturisticTheme.Interactive.IconContainer}`,
    glow: `${FuturisticTheme.Interactive.IconGlow} bg-gradient-to-r ${statusStyles.iconGradient}`,
    image: `relative h-12 w-12 rounded-full border-2 ${statusStyles.border} bg-black/30 backdrop-blur-sm ${FuturisticTheme.Animation.Smooth} ${FuturisticTheme.Interactive.HoverBorder} ${statusStyles.glow} shadow-xl`,
    overlay: FuturisticTheme.Interactive.IconOverlay,
  };
};