import PopupMessage from './enumPopupMessage';

const popupMessages = {
  [PopupMessage.ChangesSaved]: {
    image: '../assets/images/icon-changes-saved.svg' as string,
    message: 'Your changes have been successfully saved!',
  },
  [PopupMessage.LinkCopied]: {
    image: '../assets/images/icon-link-copied-to-clipboard.svg' as string,
    message: 'Link copied to clipboard!',
  },
};

export default popupMessages;
