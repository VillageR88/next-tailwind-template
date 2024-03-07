import EmailStatus from './enumEmailStatus';
const emailStatus = {
  [EmailStatus.valid]: { text: 'Thank you!', color: 'text-[#54E6AF]' },
  [EmailStatus.invalid]: { text: 'Oops! Please check your email', color: 'text-[#FB3E3E]' },
  [EmailStatus.typing]: { text: '', color: 'text-transparent' },
};

export default emailStatus;
