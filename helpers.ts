export function discoverSource(defaultSource: string) {
  if (typeof window !== "undefined") {
    const queryParams = new URLSearchParams(window.location.search)
    return queryParams.get("source") || defaultSource;
  }

  return defaultSource;
}

export function formDataToUrlSearchParams(formData: FormData): URLSearchParams {
  const params = new URLSearchParams();

  formData.forEach((val, key) => {
    params.set(key, val.valueOf().toString());
  });

  return params;
}