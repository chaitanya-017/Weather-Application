import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

const InfoBox = ({info}) => {
  let photo_url ="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHDw8QBw8REBUSEBASEhEQDQ8QDxMWFhEWFxUSExMYHSggGRonGxcVIjctMSkrLi4uFyE/ODMsNygtOi0BCgoKDQ0OGxAQGi0lICMtLS0vNy8tLTEtNTYtLSstKy0tMDItLS4tLTIvLS0tLS0tLS0tLS0tLS0tLSstLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBB//EAEAQAAICAgADBAcFBAcJAAAAAAASAQIDEQQFITFBUXEGEyJCYYGRFJKhsdEXUlTBBxYjJHLw8TRTYoKio9Lh4v/EABsBAQACAwEBAAAAAAAAAAAAAAABAgMEBQYH/8QANBEBAAICAAMFBwIHAAMBAAAAAAECAxEEEiEFEzFBURRhcYGhsdEiMhUjQlKR4fAkM8EG/9oADAMBAAIRAxEAPwDUqdZzRQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQJlIBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQJlISKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKBMpAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKBKpAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKBKpCRQCgFAKAUAoBQGgL2HlWScuPHnpasXmJaIaJr3zExuJ6fnBqX4zF3Vr0mJ19/KJZq4L88VmPEy8qyRlyUw0taKTMtMLC91pmdRHT8pFOMxd1W9piN/f0gtgvzzWI8FHRtsIoBQCgFAKAUAoBQCgFAKAUAoBQL/KOVzzK1oraKxWIm1tb7eyIj5T9CmTJyQvSnNLc8L6L0pa32q83j3Yr7HmxhtnnyZowR5qPOuRTwkxbg4vesxMzGmmmvGY7v0kvjy78VMmLXg0ujMwigFAKAUAoBQCgFAk0A0A0A0A0A0A0A0BNwuCM9ore9ccT719r/n6GLNknHTmis290L0rFp1M6dvyrD6jFWsWfUTV/GKzMREfDR5Di8nPlmda89fHx+btYa8tIjezmuD1+K1Zsm9Vfwi1oiYn4aHCZJx5YnW/PXwjcfNGavNSY3pw/FYIwWmtL1yRHvU2p6/DknJXmms190uNesVnUTtFoyqGgGgGgGgJMPDXzzrBS1vKszrznuMOXiMWGN5LRHxlemO9/2xtcryTPbtpEed6/yk59u2+Cr/Xv4RP4bEcDnny+sPL8mzU9zflas/zJp21wVunPr4xP4J4HPH9P1hTyYbYp1lrNZ8JiYOjjy48kc1LRMe6dta1LUnVo0w0ZFTQDQDQDQG65ZzyOCx1x+pidb3aLrM9ZnrCyYbYYtbczpk76aV/TXc/HS1/Wfv8AUf8Ae/8Akr7NOt7WniYiYjXWXlvSfp7GHr17cu4jw93qPZ49foRxFtz+n6/6c5o2GE0A0A0A0A0A0A0A0BJogNANANANANANANANAdFy7m9ME4sPDVma9Kza8r7U+9EddRM/n3HB4rs/Jet82SevjqOvT0nw6xH/AEuji4mtZilY6HMeb0zzlw8TWYr1rFqS0NHvTHTcRP5d/Qnhez8mOKZsc9fHU9OnpHj1mP8Ao6oy8TW0zS0dHO6O655oBoBoDLFitlnWKtrT4VrNp+kCZiPFMRvwdBy70f8AVxF+PiZn9z3Y/wAU98/56nmu0+1eIruuGs1j+6Y+3p8+vwdHh+EpPW87n0bitYpGqRERHZERqI+R5e1rWnmtO597qViIjUPJIXhhIWhDlxxljWSItHhMbgyY8t8duakzE+5NqVvGrRuGk4/lKbtwu5jvp2z/AMvien7P7c55jHxHSfXy+fp8fD4OTxXZ3LHNi/x+Gq0ejck0A0A0B7XpPZstWdT4K3jdZjenmugiOk9SZ/VEaez3dBM9I6ERqZnf+nmiqxoBoBoBoBoBoBoBoDLQSaAaAaAaAaAaAaAaAdnYQADRIAdRyv0brNYtzDczMbSJWK/C09uzWvmneqtimGNbsl430ZxZK/3OZx27t2m1J899SK5p802wx5NrwHBU4CkUwR52960+MyY7Wm07lkrWKxqFkqsp8TjTrXvPL9q8HXDaMlI1E/Sf9t/h8k2jUq8nJbUMJC0MJC8I5JWhpeb8Gv8AaY47Z9qPj4nquxO0Jv8A+PknrH7fx8vL3fBxu0uFiv8ANr8/y1mj0bkmgGgPY6dhMWmJ3CtqxaNT4PNELPSZtMxpWKxEzMebzRCxoBoBoBoBoBoBoBoD3ZAbAbAbAbAbAbAbAbAbAbAbA2/J+TX4yK5d1rWLRpt7tq3XUeHbBjvkiOjLTHM9XZmo2gAAA8mIntjZS+Ol41aIn4piZjwVuLxRENWNeJxe1eCxVx97SNTHjrw6tvhstptyypSeeb8MJC8I5JWhHkpGSJrbsmJiS+PJbHeL18YnZekXrNZ8Jczkr6u01t3TMfST6NiyRkpF6+ExE/5eSvSaWms+XRjsuqbAbAbAbAbAbAbAbAbAbAbAbAbAgckHAOAcA4BwDgHAOAcA4BwOh5L6R14LFGLiaWldrNFnpMzOpiZjvmTBkxTadwzUy8salsP624P93m+7j/8AIp3Fl++qt8t57j5ja1cNckaruWisR267pk0+Nz14SkXv13Oun/QzYf5s6hsPXx4T+BzP43g/tt9Pyz+z29YefaI8J/An+N4P7bfT8p9mt6w8+0x4T+A/jeD+230/KfZb+sIeIz+sjVY6fE5/H9pRxFeSkajz2z4MHJO5VZOS24YSF4RyStDELOa5v7Ga/wAVn/pg912NebcHTfluPrLzXH11xFvl9lNzptMcA4BwDgHAOAcA4BwDgHAOAcCu5KRwDgHAOAcA4BwDgHAOAcA4BwN76H5f7e9Z78U/hav/ALOB/wDoab4atvS0faW5wM/zJj3Ovk8c6rGQsxklaGEhaGEhaGEheEckrQxiN9hMRMzqFpmI8XL8+auez1mI9mImazET7Mdmz3PY9JpwlYnx6/eXm+PtzZ5mPd9muc6jTHAOAcA4BwDgHAOAcA4BwDgHAruAcA4BwDgHAOAcD1t9gHR09E8tqNbJSL62kxMx5Tfx+Rg7+u/Bm7mdNnh9FcNaRGa17W11vFtdf+GOzXnsxzntvovGGunI8x4eeBzZMV53NJ1vxiYiYn6TBs1nmjbXtGp0rOWQOBd5Pxv2LPiyW7Itq3+GY1M/Sd/I0+P4f2jhr448Zjp8Y6wy4b8l4s+jyfO3cYyFmMkrQwkLQ8pSck6oZcOG+a/JSNyWvWkblYjgP3rfSDt07EjX679fdDUnjZ8oRX4C0TEVncTPb4fIwX7Gy1vEVncT5+nyZq8bTlmZjqvYsUYY1jjX5z5nfwcPjwV5aRr7/NzsmS2Sd2l7lx1zVmuasWie2toiYnziTNE6UfP/AEr5PHKslbcPv1eTeo7UtHbXfh3x8/A3MV+aOvi1clOWejQuZWNJgx34i0VwVteZ7qxMz59CJmI8UxG/Be4PkvEcXa1a45oumnJukRvsjs3PyKWyVjzWjHaUHMeBy8ttFeKrrcbrMTuto79SWraLR0Ras18VRyyo4BwDgHAOAcA4BwIHJSOAcA4BwDgHAOB0HopHC2nJPMrUi1ZrNPWZErrvmJmYje9GHNz/ANLJj5fN2mfmGHh51xGfFSdROr5aVnU9k6mew1YpafCGxNo9WNeZYLxM04jDMV62mM2OYjznfQclvQ5q+rkvTTjMHETi+yWpe8M18cxaF6aibR0md/T5mzgraN7YMs1nwc05nYhwDgdx6I85ji8cYM8+3jj2d+/SOz5x2eWvieM7b7PnDk7+kfpt4+6fxP36ejqcJm5o5J8YdDJwW8xklaGEkLQt8DXVd+M/ken7Gx1jDN/OZ+3/AEtDi7TN9eiydhqgAABpfSzlt+acPFOEiJtXJW8RNl3qtomInx6/AyYrRW25UyVm0dHzPLE4bTXLE1tWZiazExMTHbEwbsdWrp2PonbhuCxesvxGN8kQ1b5MdJpqZ9mImd9/z1BrZua060z4+WI3t0mDicfERNsGSl4r22rkrasdN9ZienQ53E8R3ExExuZbOOnPudtfx+bguOrrjM2C8RuY/vFNx06zGp3s3MfexG9TEsVuSfN85vaImUmZjc6me2Y30mTfajxwDgHAOAcA4BwDgV3AOAcA4BwDgHAOB5NwNlf1fD8Rje88ZRa7Vomd1mIpHXfTp+RXrMei3Tfqx4W97Y+KnhstcVNVm2K1+t4aVrXcddfz+InW42R5qDllRwDgHAyxZ7YbRbFaa2rO4mJ1MT4wVvSt6zW0biUxMxO4dxyP0tx8TEU5lMY79j9mO3nPuz+H5HkO0OwsmKZvg/VX084/P3+7qYOMrbpfpP0dJvfWDgeHRvQucPSK1ie+euz1nZnDUx4a3iOto3v/AONDPebWmPKEp0YiIYHpIAAAAD5r/SHWuPjInH22w0tfXi14iZ+KxX6QbmD9rWy/ucyxmY3Wei/OMVcGTh+KwxGKmPJkzZJybbcxEQi9ZndaxG+ujidocLknLGWlv1TMRWNeHz38Z3pu8PlryzSY6eMuZ4ziI4jJe+KlcdZn2aVjpWO6PP8AmdjFSaUiszufVqWmJncRpC5dUcA4BwDgHAOAcA4FdyUjgHAOAcA4BwDgHAv5OYVwZqZeU0nCtY1Fp9Z7SzFp676anRXl3GpTvruEeLJiy1z24y1/WT7WNYqtrTb2m6dP9SevTSOnmqOSDgHAOAcA4Fzgeb5+A/2TNekfu73T7s7j8DWz8Fw+f/20ifv/AJjqyUy5Kftl03KPT/Jw8TXmWOMsd1seqXj4THZP4GPHwVMVIpj8I9eq855tO7Nl+0XB/D5vvY/1Lez29TvY9D9ouD+Hzfex/qPZ7ep3seh+0XB/D5vvY/1Hs9vU72PQ/aLg/h833sf6j2e3qd7HoftFwfw+b72P9R7Pb1O9j0RcR/SLRZ+y8Nebd3rL1ivnOtzJMcPPnKJy+5xHHcffj8l8vFWa153M9keEREd0RGo+RsxWIjUMMzMzuVdyRJHETWs0rOotNZtHjNdrvy3P18ivJE25vODc60jcsDgHAOAcA4BwDgHAOBAxIMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMBAwSMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMBCxIMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMBCwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgIWJSMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMAYAwBgDAGAMB//Z"

  return (
    <div className="infoBox">
      <div className="card_content">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={photo_url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg:C</p>
              <p>humidity = {info.humidity}</p>
              <p>Temperature = {info.temp}</p>
              <p>Min Temperature = {info.tempMin}</p>
              <p>Max Temperature = {info.tempMax}</p>
              <p>The Weather Feels Like= {info.feelsLike}&deg:C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
