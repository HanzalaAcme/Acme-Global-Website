import ShareBox from "./ShareBox";
//import ApplyBox from "./ApplyBox";

export default function JobSidebar({ meta, date, url }: any) {
  return (
    <div className="sticky top-28 space-y-6">

      {/* JOB INFO */}
      <div className="bg-[#F4F6FB] border rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold text-gray-700 mb-4">
          Job Information
        </h3>

        <div className="space-y-4 text-sm text-black font-medium">

          <div>
            <p className="text-gray-500">Posted</p>
            <p>{date}</p>
          </div>

          <div>
            <p className="text-gray-500">Job Type</p>
            <p>{meta.type}</p>
          </div>

          <div>
            <p className="text-gray-500">Department</p>
            <p>{meta.department || "IT Services"}</p>
          </div>

          <div>
            <p className="text-gray-500">Experience</p>
            <p>{meta.experience}</p>
          </div>


          <div>
            <p className="text-gray-500">Work Mode</p>
            <p>{meta.mode}</p>
          </div>

        </div>
      </div>

      {/* SHARE BOX */}
      <ShareBox url={url} />

      {/* APPLY BOX */}
      {/* <ApplyBox url={url} /> */}

    </div>
  );
}