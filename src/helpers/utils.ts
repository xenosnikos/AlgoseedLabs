const getPageNameFromUrl = (url: string) => {
  const urlPaths = url.split("/");
  const lastPath = urlPaths[urlPaths.length - 1];
  return lastPath.charAt(0).toUpperCase() + lastPath.slice(1);
}

export {
  getPageNameFromUrl
}