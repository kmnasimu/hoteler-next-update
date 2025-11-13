declare module 'isotope-layout' {
  interface IsotopeOptions {
    itemSelector?: string;
    percentPosition?: boolean;
    masonry?: {
      columnWidth?: string | number;
      gutter?: string | number;
    };
    layoutMode?: string;
    animationOptions?: {
      duration?: number;
      easing?: string;
      queue?: boolean;
    };
  }

  class Isotope {
    constructor(element: HTMLElement, options?: IsotopeOptions);
    arrange(options: { filter: string }): void;
    layout(): void;
    destroy(): void;
  }

  export default Isotope;
}

