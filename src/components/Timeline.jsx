import TimelineItem from "./TimelineItem";

/* eslint-disable react/prop-types */
const Timeline = ({ events }) => {
  return (
    <div className="timeline relative flex flex-col gap-10">
      <div
        className="w-1 h-full absolute left-2"
        style={{
          background:
            "linear-gradient(180deg, rgba(234, 88, 12, 0) 0%, rgba(234, 88, 12, 1) 10%, rgba(234, 88, 12, 1) 90%, rgba(234, 88, 12, 0) 100%)",
        }}
      ></div>
      {events &&
        events.map((course, index) => (
          <TimelineItem
            key={index}
            title={course.title}
            school={course.school}
            skills={course.skills}
            initYear={course.initDate}
            finishYear={course.finishDate}
          />
        ))}
    </div>
  );
};

export default Timeline;
