declare module 'react-modal-video' {
  import { Component } from 'react';

  interface ModalVideoProps {
    channel: 'youtube' | 'vimeo' | 'custom';
    isOpen: boolean;
    videoId: string;
    autoplay?: boolean;
    onClose: () => void;
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
    aria?: {
      openMessage?: string;
      dismissBtnMessage?: string;
    };
  }

  export default class ModalVideo extends Component<ModalVideoProps> {}
}

