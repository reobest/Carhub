const nextConfig = {
    images: {
        domains: ["unsplash.com","images.unsplash.com","prlabsapi.com","https://car-hub-rlzo.onrender.com"],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'car-hub-rlzo.onrender.com', // Replace with the actual hostname you need
            },
          ],
    }
}

module.exports = nextConfig
