const sendToken=(user,statusCode,res)=>{
    const token=user.getJwtToken();

    const option={
        expires: new Date(
            Date.now()+ 90 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        sameStie:"none",
        secure: true
    }

    res.status(statusCode).cookie("token",token, option).json({
        success:true,
        token,
        user
    })

}

module.exports=sendToken;