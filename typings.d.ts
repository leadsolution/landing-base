declare module "react-facebook-pixel" {
  declare function init(pixelId: string);
  declare function pageView(pathname: string);
  declare function track(eventName: string);
}
