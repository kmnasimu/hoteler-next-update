declare module 'react-modal-video' {
  import { Component } from 'react';

  interface ModalVideoProps {
    channel?: string;
    isOpen?: boolean;
    videoId?: string;
    onClose?: () => void;
    autoplay?: boolean;
    allowFullScreen?: boolean;
    animationSpeed?: number;
    classNames?: {
      modalVideo?: string;
      modalVideoClose?: string;
      modalVideoBody?: string;
      modalVideoInner?: string;
      modalVideoIframeWrap?: string;
      modalVideoCloseBtn?: string;
    };
  }

  export default class ModalVideo extends Component<ModalVideoProps> {}
}

