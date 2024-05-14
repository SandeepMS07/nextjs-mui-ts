declare module "*.png";
declare module "*.svg";
declare module "*.jpg";

declare namespace google {
  namespace accounts {
    namespace id {
      interface InitializeOptions {
        client_id: string;
        callback: (response: any) => void;
      }
      function initialize(options: InitializeOptions): void;
      interface RenderButtonOptions {
        theme: string;
        size: string;
      }
      function renderButton(
        element: HTMLElement | null,
        options: RenderButtonOptions
      ): void;
    }
  }
}
