import httpStatus from 'http-status';
export const httpErrors = (req, res)=>{
    console.log(`📣 NOT FOUND ${req.url}`);
    // res.status(httpStatus.NOT_FOUND).sendFile(path.resolve('views', '404.html'));
    res.status(httpStatus.NOT_FOUND).render('404', {layout: false,
    docTitle: 'Error 404 - Página no encontrada',
    setIcon: '/images/cone-striped.svg'
    });
}