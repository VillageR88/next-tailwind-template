import Status from './enumStatus';

const status = {
  [Status.Empty]: "Can't be empty",
  [Status.CheckAgain]: 'Please check again',
  [Status.InvalidLoginCredentials]: 'Invalid login credentials',
};

export default status;
