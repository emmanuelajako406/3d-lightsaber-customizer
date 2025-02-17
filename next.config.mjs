/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/3d-lightsaber-customizer' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/3d-lightsaber-customizer' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/3d-lightsaber-customizer' : ''
  }
};

export default nextConfig;