export function discoverSource(defaultSource: string) {
  if (typeof window !== "undefined") {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get("source") || defaultSource;
  }

  return defaultSource;
}

// Tranforma formData em SearchParams
export function formDataToUrlSearchParams(formData: FormData): URLSearchParams {
  const params = new URLSearchParams();

  formData.forEach((val, key) => {
    params.set(key, val.valueOf().toString());
  });

  return params;
}


// Tranforma Objeto em SearchParams
export function formObjectToUrlSearchParams(obj:any) {
  const params = new URLSearchParams();
    
  Object.keys(obj).forEach( (key)=>{
      params.set(key, obj[key])
      
  })

  return params;

}

export function focusFirst() {
  const form = document.querySelector<HTMLFormElement>('form');

  if (!form) {
    return;
  }

  const firstInput = document.querySelectorAll<HTMLInputElement>('input')[1];

  if (!firstInput) {
    return;
  }

  firstInput.focus();
}
