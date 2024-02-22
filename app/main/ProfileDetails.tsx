const ProfileDetails = ({ visible }: { visible: boolean }) => {
  return (
    <div className={`${visible ? 'block' : 'hidden'} `}>
      <h1>Profile Details</h1>
    </div>
  );
};

export default ProfileDetails;
