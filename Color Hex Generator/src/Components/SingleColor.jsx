import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Hex value copied to Clipboard');
      } catch (error) {
        toast.error('Hex value unable to copy to Clipboard');
      }
    } else {
      toast.error('Clipboard not available');
    }
  };
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={copyToClipboard}
    >
      <p className='percent-value'>{`${weight}%`}</p>
      <p className='color-value'>{`#${hex}`}</p>
    </article>
  );
};

export default SingleColor;
