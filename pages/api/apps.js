export default function handler(req, res) {
    res.status(200).json([
        {
        id: 1,
        name: "E-Z Uploader",
        path: "api/apps/e-z-uploader"
        },
    ]);
}