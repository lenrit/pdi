const cloudinary = require('cloudinary').v2;
(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dhr3ewnzn', 
        api_key: '173324313565763', 
        api_secret: 'moZG71h9s5Q4oHmcIZa88iYFR8g' // Click 'View API Keys' above to copy your API secret
    });
    
    // // Upload an image
    //  const uploadResult = await cloudinary.uploader
    //    .upload(
    //        './imagenes/lata_coca.jfif', {
    //            public_id: 'Lata coca',
    //        }
    //    )
    //    .catch((error) => {
    //        console.log(error);
    //    });
    
    // console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    // const optimizeUrl = cloudinary.url('Lata coca', {
    //     fetch_format: 'auto',
    //     quality: 'high'
    // });
    
    // console.log(optimizeUrl);
    
    // // Transform the image: auto-crop to square aspect_ratio
    // const autoCropUrl = cloudinary.url('Lata coca', {
    //     crop: 'auto',
    //     gravity: 'auto',
    //     width: 500,
    //     height: 700,
    // });
    
    // console.log(autoCropUrl);    
    cloudinary.uploader.destroy('Lata coca', function(result) { console.log(result) });
})();