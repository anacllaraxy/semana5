/** @type {import('next').NextConfig} */
const isStatic = process.env.STATIC_EXPORT === "true";

const nextConfig = {
  output: isStatic ? "export" : "standalone",
};

if (!isStatic) {
  nextConfig.rewrites = async () => {
    const backend = process.env.BACKEND_URL || "http://localhost:8000";
    return [
      { source: "/api/:path*", destination: `${backend}/api/:path*/` },
    ];
  };
}

export default nextConfig;
