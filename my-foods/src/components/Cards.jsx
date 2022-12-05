import Card from "./Card"
function Cards(props){
    return(
        <>
        <Card title="Tacacá" description="Melhor pedida do final de tarde!" imgPath="https://www.prazeresdamesa.com.br/wp-content/uploads/2020/09/BanzeiroSP_Tacac%C3%A1_Cred-Kato-1.jpg"/>

        <Card
         title="Açaí"
         description="Melhor pedida para o final de tarde!" 
         imgPath="https://img.itdg.com.br/tdg/images/blog/uploads/2019/09/comida-paraense-acai1.jpg"
        
        />

        <Card
         title="creme de cupuaçú"
         description="Melhor sobremesa!" 
         imgPath="https://www.saborama.com.br/wp-content/uploads/2020/10/post-creme-de-Cupua%C3%A7u-1024x683.jpg"
        
        />

        </>
    )
}

export default Cards