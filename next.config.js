/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export'
}


module.exports = nextConfig

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rickandmortyapi.com',
                port: '',
                pathname: '/api/character/avatar/*',
            },
        ],
    },
}
