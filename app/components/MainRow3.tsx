const MainRow3 = () => {
  const carouselItems = [
    {
      avatar: '/images/avatar-anisha.png',
      author: 'Anisha Li',
      quote:
        '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    },
    {
      avatar: '/images/avatar-ali.png',
      author: 'Ali Bravo',
      quote:
        '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    },
    {
      avatar: '/images/avatar-richard.png',
      author: 'Richard Watts',
      quote:
        '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
    },
    {
      avatar: '/images/avatar-shanai.png',
      author: 'Shanai Gough',
      quote:
        '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
    },
  ];
  return (
    <div className="flex h-1/3 w-full flex-row items-center justify-center bg-[#FFFFFF]">
      <h2 className="text-[2.4rem] font-[700] text-[hsl(233,26%,24%)]">What they’ve said</h2>
      <ul></ul>
    </div>
  );
};
export default MainRow3;
