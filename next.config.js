/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/nl/bug',
                destination: '/en/error'
            }
        ]
    }
}

module.exports = nextConfig
