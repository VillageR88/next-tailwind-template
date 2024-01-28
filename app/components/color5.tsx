const color5 = ({ index }: { index: number }) => {
  if ((index + 1) % 5 === 1) return { color: '#5255c5', hover: 'hover:text-[#5255c5]' };
  else if ((index + 1) % 5 === 2) return { color: '#5dba3b', hover: 'hover:text-[#5dba3b]' };
  else if ((index + 1) % 5 === 3) return { color: '#ff8b00', hover: 'hover:text-[#ff8b00]' };
  else if ((index + 1) % 5 === 4) return { color: '#ff5157', hover: 'hover:text-[#ff5157]' };
  else if ((index + 1) % 5 === 0) return { color: '#ffc000', hover: 'hover:text-[#ffc000]' };
};

export default color5;
