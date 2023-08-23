const movie = [{
    name: 'legomovie',
    ano: 2014 ,
    img: "https://www.imdb.com/title/tt1490017/mediaviewer/rm712541697/?ref_=tt_ov_i"
},{
    name: 'terminator2',
    ano: 1991 ,
    img: "https://www.imdb.com/title/tt0098321/mediaviewer/rm3230404096/?ref_=tt_ov_i"
    
},{
    name: 'metegol',
    ano: 2013 ,
    img: "https://www.imdb.com/title/tt1634003/mediaviewer/rm3296503552/?ref_=tt_ov_i"
},{
    name: 'cars',
    ano: 2006 ,
    img:"https://www.imdb.com/title/tt0317219/mediaviewer/rm3794114560/?ref_=tt_ov_i"
},{
    name: 'cars 3' ,
    ano: 2017,
    img:"https://www.imdb.com/title/tt3606752/?ref_=hm_tpks_tt_i_12_pd_tp1_pbr_ic"
},{
    name: 'hombrearana',
    ano: 2002 ,
    img:"https://www.imdb.com/title/tt0145487/mediaviewer/rm4179401729/?ref_=tt_ov_i"
},{
    name: 'Dragon Ball Super: Super Hero',
    ano: 2022 ,
    img:"https://www.imdb.com/title/tt14614892/mediaviewer/rm1841174273/?ref_=tt_ov_i"
},{
    name: 'Crepusculo',
    ano: 2008 ,
    img:"https://www.imdb.com/title/tt1099212/mediaviewer/rm1333687552/?ref_=tt_ov_i"
}]

array.map((item)=> {
    const img = document.createElement("img");
    const nombre = document.createElement("nombre");
    const ano = document.createElement("ano");
    const listelement = document.createElement("elem");
    
    nombre.textContent = item.nombre;
    img.src = item.img;
    ano.textContent = `fecha_de_Estreno ${item.ano}`;
    
    listelement.appendChild("img")
    listelement.appendChild("nombre")
    listelement.appendChild("ano")
    
    list.appendChild(listelement)
    }) 