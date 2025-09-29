const HEADERS = {
  "Content-Type": "application/json",
};

export async function GET<T>(endpoint: string): Promise<T> {
  try {
    const data = await fetch(endpoint, { headers: HEADERS }).then((response) =>
      response.json()
    );
    return data;
  } catch (e) {
    throw new Error("Error getting data: " + e);
  }
}

export async function POST<T>(endpoint: string, body?: any): Promise<T> {
  try {
    const data = await fetch(endpoint, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body),
    }).then((response) => response.json());
    return data;
  } catch (e) {
    throw new Error("Error posting data: " + e);
  }
}

export async function PUT<T>(endpoint: string, body?: any): Promise<T> {
  try {
    const data = await fetch(endpoint, {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify(body),
    }).then((response) => response.json());
    return data;
  } catch (e) {
    throw new Error("Error updating data: " + e);
  }
}

export async function DELETE<T>(endpoint: string): Promise<T> {
  try {
    const data = await fetch(endpoint, {
      method: "DELETE",
      headers: HEADERS,
    }).then((response) => response.json());
    return data;
  } catch (e) {
    throw new Error("Error deleting data: " + e);
  }
}

export async function PATCH<T>(endpoint: string, body?: any): Promise<T> {
  try {
    const data = await fetch(endpoint, {
      method: "PATCH",
      headers: HEADERS,
      body: JSON.stringify(body),
    }).then((response) => response.json());
    return data;
  } catch (e) {
    throw new Error("Error patching data: " + e);
  }
}
