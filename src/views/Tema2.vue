<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Máquinas, herramientas y equipos para la siembra

    p.mb-3 Las actividades de alistamiento del proceso de siembra involucran la selección de la maquinaria, equipos y herramientas que son esenciales para el desarrollo óptimo de la siembra, por lo cual, es importante establecer:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .tarjeta.bg_grad-01.p-3.mb-5(data-aos="zoom-in-up")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-4
                h4 Maquinaria
                p.mb-5 Es la que se encarga de realizar las actividades de remoción de tierra, entre las que encontramos el tractor.
             
              .col-12.col-lg-6
                img(src="@/assets/curso/images/tema2/img_1.png").mb-3
           
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-4
                h4 Época de siembra
                p.mb-5 Juega un papel importante, ya que la climatología establece parámetros claves para la germinación según el tipo de semilla, por lo cual se pueden implementar soluciones antes de la siembra como escarificación, estratificación u otro procedimiento que optimice el proceso productivo, además de establecimiento del sistema de riego, fertilización, entre otros.
              .col-8.col-lg-6
                img(src="@/assets/curso/images/tema1/img_26.png").mb-3
           
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-4
                h4 Equipos
                p.mb-5 Son los ayudan a mejorar el terreno o eliminar lo que no debe estar en él, entre los que encontramos arado, rastra, asperjadora, sembradora, abonadora, empacadora.
              .col-8.col-lg-6
                img(src="@/assets/curso/images/tema2/img_2.png").mb-3
           
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-4
                h4 Herramientas
                p.mb-5 Ayudan a realizar algunos procesos, como por ejemplo transportar, excavar para posteriormente realizar el proceso de siembra, entre las que encontramos barretones, carretillas, escardillas, machetes, palas, picos, rastrillos, regaderas, trasplantadora.

              .col-8.col-lg-6
                img(src="@/assets/curso/images/tema2/img_3.png").mb-3
   
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-12
                h4 La maquinaria, herramientas y equipos
                p.mb-3 cumplen una función estratégica en la optimización de las actividades del terreno: 

            
              .col-lg-3(data-aos="fade-right")
                .jumbotron-9.p-2.mb-1
                  .row.justify-content-center.align-items-center
                    .col-3.col-lg-4.lg-0
                      img.mb-4(src='@/assets/curso/images/tema2/ico_1.svg' alt='AvatarTop')
                    .col-6.col-lg-8.lg-0
                      p.my-4  Reducir tiempos
                      
              .col-lg-3(data-aos="fade-right")
                .jumbotron-9.p-2.mb-1
                  .row.justify-content-center.align-items-center
                    .col-3.col-lg-4.lg-0
                      img(src='@/assets/curso/images/tema2/ico_1.svg' alt='AvatarTop')
                    .col-6.col-lg-8.lg-0
                      p.mt-4  Aumento de la productividad

              .col-lg-3(data-aos="fade-right")
                .jumbotron-9.p-2.mb-1
                  .row.justify-content-center.align-items-center
                    .col-3.col-lg-4.lg-0
                      img(src='@/assets/curso/images/tema2/ico_1.svg' alt='AvatarTop')
                    .col-6.col-lg-8.lg-0
                      p.mt-1 Obtener mejores resultados en el cultivo

              .col-lg-3.mb-3(data-aos="fade-right")
                .jumbotron-9.p-2.mb-1
                  .row.justify-content-center.align-items-center
                    .col-3.col-lg-4.lg-0
                      img(src='@/assets/curso/images/tema2/ico_1.svg' alt='AvatarTop')
                    .col-6.col-lg-8.lg-0
                      p.mt-4 Mejoramiento de la calidad

           
              .col-lg-3(data-aos="fade-right")
                .jumbotron-9.p-2.mb-1
                  .row.justify-content-center.align-items-center
                    .col-3.col-lg-4.lg-0
                      img(src='@/assets/curso/images/tema2/ico_1.svg' alt='AvatarTop')
                    .col-6.col-lg-8.lg-0
                      p.mb-4  Identificación del suelo

              .col-lg-3(data-aos="fade-right")
                .jumbotron-9.p-2.mb-1
                  .row.justify-content-center.align-items-center
                    .col-3.col-lg-4.lg-0
                      img(src='@/assets/curso/images/tema2/ico_1.svg' alt='AvatarTop')
                    .col-6.col-lg-8.lg-0
                      p.my-4 Ahorro económico

              .col-lg-3.mb-3(data-aos="fade-right")
                .jumbotron-9.p-2.mb-1
                  .row.justify-content-center.align-items-center
                    .col-3.col-lg-4.lg-0
                      img(src='@/assets/curso/images/tema2/ico_1.svg' alt='AvatarTop')
                    .col-6.col-lg-8.lg-0
                      p.mt-2 Mejoramiento de las técnicas de siembra. 

       
          
              .jumbotron-7.p-2(data-aos="fade-left") 
                .row.justify-content-around.align-items-center
                  .col-lg-10
                    p.mb-0.text-center Sin embargo es importante identificar los impactos ambientales (agua, suelo, aire, flora, fauna) que se puedan generar con su implementación y diseñar estrategias de mitigación que permitan el desarrollo sostenible del proceso.

    Separador

    #t_2_1.titulo-segundo
      .h2 2.1  Tipo, limpieza, calibración y mantenimiento.
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right") 
        p.mb-3 El alistamiento del proceso de siembra, involucra la revisión de la maquinaria, con el fin de que se cumpla con las condiciones óptimas que permitan que el proceso se desarrolle de manera exitosa y no afecte el rendimiento del cultivo. Por eso la calibración, mantenimiento y limpieza de la maquinaria son actividades claves 
        
        .jumbotron-10.p-3.mb-3
          p.mb-0 El mantenimiento se haga antes de guardar las máquinas. 
        
        .jumbotron-11.p-3.mb-3
          p.mb-0 La calibración antes de usarlas. 

        .jumbotron-12.p-3
          p.mb-0 La limpieza es importante realizarla antes y después de utilizarlos, teniendo en cuenta que pueden estar sin utilizar por grandes periodos de tiempo.
          
      .col-7.col-lg-6(data-aos="fade-left")
        img.mt-3(src='@/assets/curso/images/tema2/img_4.png'  alt='')

    p.mb-3 Las actividades de calibración son indispensables para lograr densidades de siembra y tasas de fertilización esperadas, pues no hacerlo puede acarrear menor rendimiento del cultivo y esto se traduce en menores ingresos para el agricultor, por ejemplo al calibrar la sembradora, permitirá determinar la cantidad de semilla por área de terreno y así mismo la distancia y profundidad de siembra, evitan competición por nutrientes, suelo, agua, luz y además condiciones óptimas de humedad, garantizando su germinación.

   
    .row.justify-content-center.align-items-star.my-5
      .col-lg-10
        .jumbotron-13.p-3(data-aos="fade-left") 
          .row.justify-content-around.align-items-center
            .col-lg-2.col-6.d-flex.justify-content-center
              img.mt-4(src='@/assets/curso/images/tema2/ico_2.svg',  alt='', style="width:120px; display:block; margin:auto 0 ;").mb-3
            .col-lg-10
              p.mb-0 No calibrar los equipos y máquinas generaría alteración en volúmenes de fertilizantes o lo que puede alterar el correcto desarrollo del cultivo.

    p.mb-3 Los procesos agrícolas requieren de acciones puntuales que obedecen a diferentes condiciones, por lo que la limpieza, calibración y mantenimiento de la maquinaria, equipos y herramientas, obedecen al tipo de cultivo, tipo de semilla, temporada de siembra y condiciones climáticas. Todo esto con el fin de optimizar el proceso y obtener grandes resultados.

    Separador

    #t_2_2.titulo-segundo
      .h2 2.2  Cronogramas y formatos

    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right") 
        p.mb-3 La planeación, implica la determinación de lo que se quiere realizar, incluyendo las decisiones de gran importancia dentro del proceso, como el establecimiento de objetivos, programas, definición de técnicas, métodos, procedimientos y demás prioridades dentro del proceso, para este caso la siembra. Por lo cual es importante identificar las acciones a desarrollar a través de una secuencia lógica y ordenada que permita obtener resultados exitosos.

        p.mb-0 El cronograma de siembra permite establecer una guía de las temporadas del año y las condiciones de siembra en cada una, con el fin de poder establecer un alto porcentaje de crecimiento y desarrollo del cultivo, teniendo en cuenta:
        
      .col-7.col-lg-6(data-aos="fade-left")
        img.mt-3(src='@/assets/curso/images/tema2/img_5.svg'  alt='')

    .row.justify-content-center.align-items-lg-stretch.mb-3.m_tar-boton(data-aos="fade-left") 
      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.color-custom.p-4.p-lg-2.bord_rad-tarboton
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-4.col-4.mt-0.mt-lg-3
              figure
                img.img-t.mx-auto.ms-2img(src='@/assets/curso/images/tema2/ico_3.svg' alt='AvatarTop')
            .col-lg-8.col-md-8.col-8.mt-0.mt-lg-3
              p.m-0 Tipo de semilla

      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.color-custom.p-4.p-lg-2.bord_rad-tarboton
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-4.col-4.mt-0.mt-lg-3
              figure
                img.img-t.mx-auto.ms-2(src='@/assets/curso/images/tema2/ico_4.svg' alt='AvatarTop')
            .col-lg-8.col-md-8.col-8.mt-0.mt-lg-3
              p.m-0 Periodo de siembra

      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.color-custom.p-4.p-lg-2.bord_rad-tarboton
          .row.justify-content-center.align-items-center
            .col-lg-4.col-xl-3.col-xxl-4.col-md-4.col-4.mt-0.mt-lg-2
              figure
                img.img-t.mx-auto.ms-2(src='@/assets/curso/images/tema2/ico_5.svg' alt='AvatarTop')
            .col-lg-8.col-xl-9.col-xxl-8.col-md-8.col-8.mt-0.mt-lg-2
              p.mb-2 Preparación del terreno

      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.color-custom.p-4.p-lg-2.bord_rad-tarboton
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-4.col-4.mt-0.mt-lg-3
              figure
                img.img-t.ms-2(src='@/assets/curso/images/tema2/ico_6.svg' alt='AvatarTop')
            .col-lg-8.col-md-8.col-8.mt-0.mt-lg-3
              p.m-0 Plazo de trasplante

      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.color-custom.p-4.p-lg-2.bord_rad-tarboton
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-4.col-4.mt-0.mt-lg-3
              figure
                img.img-t.mx-auto.ms-2(src='@/assets/curso/images/tema2/ico_7.svg' alt='AvatarTop')
            .col-lg-8.col-md-8.col-8.mt-0.mt-lg-3
              p.m-0 Distancia de los surcos

    .row.justify-content-center.align-items-lg-stretch.mb-5.m_tar-boton(data-aos="fade-left") 
      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.color-custom.p-4.p-lg-2.bord_rad-tarboton
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-4.col-4.mt-0.mt-lg-3
              figure
                img.img-t.mx-auto.ms-2(src='@/assets/curso/images/tema2/ico_8.svg' alt='AvatarTop')
            .col-lg-8.col-md-8.col-8.mt-0.mt-lg-3
              p.m-0 Distancia de las plantas

      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.color-custom.p-4.p-lg-2.bord_rad-tarboton
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-4.col-4.mt-0.mt-lg-3
              figure
                img.img-t.mx-auto.ms-2(src='@/assets/curso/images/tema2/ico_9.svg' alt='AvatarTop')
            .col-lg-8.col-md-8.col-8.mt-0.mt-lg-3
              p.mb-4 Fertilización

      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.color-custom.p-4.p-lg-2.bord_rad-tarboton
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-4.col-4.mt-0.mt-lg-3
              figure
                img.img-t.mx-auto.ms-2(src='@/assets/curso/images/tema2/ico_10.svg' alt='AvatarTop')
            .col-lg-8.col-md-8.col-8.mt-0.mt-lg-3
              p.mb-4 Abonamiento

      .col-sm-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta--boton.color-custom.p-4.p-lg-2.bord_rad-tarboton
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-4.col-4.mt-0.mt-lg-3
              figure
                img.img-t.mx-auto.ms-2(src='@/assets/curso/images/tema2/ico_11.svg' alt='AvatarTop')
            .col-lg-8.col-md-8.col-8.mt-0.mt-lg-3
              p.mb-4 Recogida

    p.mb-0 El productor debe llevar un registro organizado de las actividades desarrolladas, por eso es indispensable el diseño de los formatos que permitan plasmar la información recolectada, la cual debe estar disponible en físico y sistematizada con fines de tecnificar el proceso, y a su vez evitar retrasos en la ejecución de las actividades, que pueda generar un desequilibrio y pérdidas productivas. Por lo cual resulta indispensable planear perfectamente el proceso con el fin de reducir al máximo los posibles contratiempos y lograr que el proceso se realice de manera eficiente y eficaz. 

     






















































































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
