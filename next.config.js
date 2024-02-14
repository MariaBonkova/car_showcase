/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.imagin.studio',
                port: '',
                pathname: '/**',

            },
        ],
    },
    typescript:{
        ignoreBuildErrors:true,
    }
}