declare module 'isotope-layout' {
  interface IsotopeOptions {
    itemSelector?: string;
    layoutMode?: string;
    percentPosition?: boolean;
    masonry?: {
      columnWidth?: string | number;
    };
    animationOptions?: {
      duration?: number;
      easing?: string;
      queue?: boolean;
    };
  }

  class Isotope {
    constructor(element: HTMLElement | string, options?: IsotopeOptions);
    arrange(options?: { filter?: string }): void;
    destroy(): void;
  }

  export default Isotope;
}

