import cloudinary from "cloudinary";

export default async function handler(req, res) {
  try {
    const { file } = req.body;
    const result = await cloudinary.v2.uploader.upload(file, {
      folder: "my_folder",
    });
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Upload failed" });
  }
}
