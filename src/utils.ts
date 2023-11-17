export function isDeployedWebsiteAndOpenedOnMobile(): boolean {
    // Check if the connection is secure (HTTPS)
    const isSecureConnection = window.location.protocol === "https:";
  
    // Check if the user is using a mobile device
    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
  
    // Return true if all conditions are met
    return isSecureConnection && isMobileDevice;
  }
  
