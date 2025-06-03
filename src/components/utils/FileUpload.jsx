import React from "react";

function FileUpload() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    console.log(progress, ":progress");
  }, [progress]);

  const uploadFileInChunks = async (file) => {
    const chunkSize = 10 * 1024 * 1024; // 1 * means 1KB if want to make mb then add * 1024 if gb then 2 times into
    const totalChunks = Math.ceil(file.size / chunkSize);

    console.log(totalChunks, "totalChunks");

    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(file.size, start + chunkSize);
      const chunk = file.slice(start, end);

      const formData = new FormData();
      formData.append("chunk", chunk);
      formData.append("chunkIndex", i);
      try {
        console.log("uploading...");
        await fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(formData, "this is uploaded");
      } catch (error) {
        console.log(error, "error");
      }

      setProgress(((i + 1) / totalChunks) * 100);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) uploadFileInChunks(file);
  };
  return (
    <div>
      <input
        onChange={handleFileChange}
        type="file"
        className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        rounded-lg border border-white file:text-sm file:font-semibold
        file:bg-white file:text-black
        "
      />
      <p>Upload Progress: {progress.toFixed(5)}%</p>
    </div>
  );
}

export default FileUpload;
