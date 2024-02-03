/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "https://digitalmarketplace-production-d677.up.railway.app/",
			},
		],
	},
};

module.exports = nextConfig;