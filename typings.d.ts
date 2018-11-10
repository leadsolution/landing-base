declare module "react-facebook-pixel" {
  declare function init(pixelId: string);
  declare function pageView();
  declare function track(eventName: string);
}