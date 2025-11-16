import Cookies from "universal-cookie";

const cookies = new Cookies();

const HEADERS = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${cookies.get("jwt-session-token")}`,
};

const BACKEND_DOMAIN = import.meta.env.VITE_BACKEND_DOMAIN;

export async function GET<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${BACKEND_DOMAIN}${endpoint}`, {
      headers: HEADERS,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Error getting data: " + e);
  }
}

export async function POST<T>(endpoint: string, body?: any): Promise<T> {
  const isFormData = body instanceof FormData;
  try {
    const response = await fetch(`${BACKEND_DOMAIN}${endpoint}`, {
      method: "POST",
      headers: isFormData
        ? { Authorization: `Bearer ${cookies.get("jwt-session-token")}` }
        : HEADERS,
      body: isFormData ? body : JSON.stringify(body),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Error posting data: " + e);
  }
}

export async function PUT<T>(endpoint: string, body?: any): Promise<T> {
  try {
    const response = await fetch(`${BACKEND_DOMAIN}${endpoint}`, {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Error updating data: " + e);
  }
}

export async function DELETE<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${BACKEND_DOMAIN}${endpoint}`, {
      method: "DELETE",
      headers: HEADERS,
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Error deleting data: " + e);
  }
}

export async function PATCH<T>(endpoint: string, body?: any): Promise<T> {
  try {
    const response = await fetch(`${BACKEND_DOMAIN}${endpoint}`, {
      method: "PATCH",
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Error patching data: " + e);
  }
}
