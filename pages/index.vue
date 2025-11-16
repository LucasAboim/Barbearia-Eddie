<script setup lang="ts">
import { ref, watch, nextTick, onMounted, computed } from 'vue'

// Desliga SSR só para esta página
definePageMeta({
  ssr: false
})

// Inicializa o template do ThemeForest após o Nuxt montar a página
onMounted(() => {
  if (typeof window !== 'undefined' && window.theme) {
    window.theme.init && window.theme.init()
  }
})
</script>

<template xmlns="http://www.w3.org/1999/html">
  <div class="grow shrink-0">
    <!--    BANNER-->
    <section data-dots="false" class="wrapper  bg-[#21262c] opacity-100 ">
      <div class="swiper-container swiper-hero dots-over relative z-10 swiper-container-0" data-margin="0"
           data-autoplay="true" data-autoplaytime="7000" data-nav="true" data-dots="true" data-items="1">
        <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div class="swiper-wrapper" id="swiper-wrapper-2c7948eced8bad77" aria-live="off"
               style="cursor: grab; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">

            <!-- SLIDE 1 - VÍDEO MICHELE -->
            <div
                class="swiper-slide bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 !h-[750px] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)] swiper-slide-active relative">

              <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
                <source src="/assets/media/michele.mp4" type="video/mp4">
              </video>

              <div class="container !h-full relative z-[2]">
                <div class="flex flex-wrap mx-[-15px] !h-full">
                  <div
                      class="md:w-10/12 md:!ml-[8.33333333%] lg:w-7/12 lg:!ml-0 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] !px-[15px] max-w-full text-center lg:text-left xl:text-left justify-center self-center items-start">

                    <p class="lead text-[1.15rem] leading-normal !mb-7 !text-white animate__animated animate__slideInRight animate__delay-2s">
                      Invista na durabilidade. Qualidade e excelência garantidas.
                    </p>

                    <div class="animate__animated animate__slideInUp animate__delay-3s">
                      <a href="https://www.picktime.com/nua"
                         class="btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)]
               active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]">
                        Agendar agora
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <!-- /SLIDE 1 -->

            <!-- SLIDE 2 - VÍDEO STEFANY -->
            <div
                class="swiper-slide bg-overlay bg-overlay-400 bg-[#21262c] opacity-100 !h-[750px] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)] relative">

              <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
                <source src="/assets/media/stefany.mp4" type="video/mp4">
              </video>

              <div class="container !h-full relative z-[2]">
                <div class="flex flex-wrap mx-[-15px] !h-full">
                  <div
                      class="md:w-11/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center justify-center self-center">

                    <p class="lead text-[1.15rem] leading-normal !mb-7 !text-white animate__animated animate__slideInRight animate__delay-2s">
                      A forma certa para o seu rosto. Resultados definidos e naturais.
                    </p>

                    <div class="animate__animated animate__slideInUp animate__delay-3s">
                      <a href="https://www.picktime.com/nua"
                         class="btn btn-lg btn-outline-white !text-white bg-[#ffffff] !border-white !border-[2px] hover:!text-[#343f52] hover:bg-[#ffffff] hover:border-white focus:shadow-[rgba(255,255,255,1)]
               active:!text-[#343f52] active:bg-[#ffffff] active:border-white disabled:text-white disabled:bg-transparent disabled:border-white !rounded-[50rem]">
                        Agendar agora
                      </a>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <!-- /SLIDE 2 -->
          </div>
          <!--/.swiper-wrapper -->
          <span class="swiper-notification " data-dots="false" aria-live="assertive" aria-atomic="true"></span></div>
        <!-- /.swiper -->
        <div class="swiper-controls" data-dots="false">
          <div class="swiper-navigation">
            <div class="swiper-button swiper-button-prev swiper-button-disabled" tabindex="-1" role="button"
                 aria-label="Previous slide" aria-controls="swiper-wrapper-2c7948eced8bad77" aria-disabled="true"></div>
            <div class="swiper-button swiper-button-next" tabindex="0" role="button" aria-label="Next slide"
                 aria-controls="swiper-wrapper-2c7948eced8bad77" aria-disabled="false"></div>
          </div>
        </div>
      </div>
    </section>
    <!--    BANNER-->

    <!-- Serviços -->
    <section id="snippet-1" class="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid">
      <div style="margin-top: 200px;"
           class="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div class="flex flex-wrap mx-[-15px] !text-center">
          <div class="xl:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h3 class="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-10">Os Nossos Serviços e Especialidades</h3>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <div class="flex flex-wrap mx-[-15px] !mt-[-30px]">
<!--          CARDS-->

          <!--          CARDS-->
          <div class="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <NuxtLink to="/servicos#sobrancelhas" class="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] lift !h-full">

              <div class="card-body p-8 flex flex-row bg-[#FFF2F2] rounded-lg">
                <div>
                  <img
                      src="/assets/img/sobrancelhas.jpeg"
                      alt="Foto de perfil"
                      class="!w-[4rem] !h-[4rem] rounded-full object-cover !mr-4"
                  />
                </div>
                <div>
                  <h2 class="!mb-1 mt-lg-4 text-2xl">Sobrancelhas</h2>
                </div>
              </div>
            </NuxtLink>
          </div>
          <!--          CARDS-->

          <!--          CARDS-->
          <div class="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <NuxtLink to="/servicos#pestanas" class="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] lift !h-full">
              <div class="card-body p-8 flex flex-row bg-[#FFF2F2] rounded-lg">
                <div>
                  <img
                      src="/assets/img/pestanas.jpeg"
                      alt="Foto de perfil"
                      class="!w-[4rem] !h-[4rem] rounded-full object-cover !mr-4"
                  />
                </div>
                <div>
                  <h2 class="!mb-1 mt-lg-4 text-2xl">Pestanas</h2>
                </div>
              </div>
            </NuxtLink>
          </div>
          <!--          CARDS-->

          <!--          CARDS-->
          <div class="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <NuxtLink to="/servicos#unhas" class="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] lift !h-full">
              <div class="card-body p-8 flex flex-row bg-[#FFF2F2] rounded-lg">
                <div>
                  <img
                      src="/assets/img/unhas.jpeg"
                      alt="Foto de perfil"
                      class="!w-[4rem] !h-[4rem] rounded-full object-cover !mr-4"
                  />
                </div>
                <div>
                  <h2 class="!mb-1 mt-lg-4 text-2xl">Manicure</h2>
                </div>
              </div>
            </NuxtLink>
          </div>
          <!--          CARDS-->

          <!--          CARDS-->
          <div class="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <NuxtLink to="/servicos#depilacao" class="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] lift !h-full">
              <div class="card-body p-8 flex flex-row bg-[#FFF2F2] rounded-lg">
                <div>
                  <img
                      src="/assets/img/depilacao.jpg"
                      alt="Foto de perfil"
                      class="!w-[4rem] !h-[4rem] rounded-full object-cover !mr-4"
                  />
                </div>
                <div>
                  <h2 class="!mb-1 mt-lg-4 text-2xl">Depilação</h2>
                </div>
              </div>
            </NuxtLink>
          </div>
          <!--          CARDS-->

          <!--          CARDS-->
          <div class="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <NuxtLink to="/servicos#medicina" class="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] lift !h-full">
              <div class="card-body p-8 flex flex-row bg-[#FFF2F2] rounded-lg">
                <div>
                  <img
                      src="/assets/img/estetica.jpg"
                      alt="Foto de perfil"
                      class="!w-[4rem] !h-[4rem] rounded-full object-cover !mr-4"
                  />
                </div>
                <div>
                  <h2 class="!mb-1 mt-lg-4 text-2xl">Medicina Estética</h2>
                </div>
              </div>
            </NuxtLink>
          </div>
          <!--          CARDS-->
        </div>
      </div>
    </section>
    <!-- Serviços -->

    <!--A Nossa Equipa-->
    <section class="wrapper !bg-[#ffffff]">
      <div class="flex flex-wrap mx-[-15px] !mt-[7rem]">
        <div
            class="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
          <h3 class="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-1">A Nossa Equipa</h3>
        </div>
        <!-- /column -->
      </div>

      <div class="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div>
          <div class="flex flex-wrap mx-[-15px] !text-center">
            <div class="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto"><!----><!----></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 <!--TRABALHADOR-->
            <div class="w-full">
              <article class="text-left">
                <figure class="overlay overlay-1 hover-scale rounded !mb-4 group w-[250px] relative">
                  <a>
                    <img
                        class="w-full h-auto !transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 rounded"
                        src="/assets/img/michele.png"
                        alt="image">
                  </a>
                </figure>

                <div class="post-header">
                  <h2 class="post-title h3 !mb-1 !text-[1.2rem] !leading-[1.4]">
                    <a class="!text-black hover:!text-[#4C692E] no-underline">
                      Michell Ruas
                    </a>
                  </h2>
                  <div class="inline-block text-[0.8rem] text-[#343f52]">
                    <i class="fa-regular fa-calendar "></i>
                    Lash designer, sobrancelhas, depilação rosto
                  </div>
                </div>
              </article>
            </div>
<!--TRABALHADOR-->
 <!--TRABALHADOR-->
            <div class="w-full">
              <article class="text-left">
                <figure class="overlay overlay-1 hover-scale rounded !mb-4 group w-[250px] relative">
                  <a>
                    <img
                        class="w-full h-auto !transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105 rounded"
                        src="/assets/img/stefany.png"
                        alt="image">
                  </a>
                </figure>

                <div class="post-header">
                  <h2 class="post-title h3 !mb-1 !text-[1.2rem] !leading-[1.4]">
                    <a class="!text-black hover:!text-[#4C692E] no-underline">
                      Stefany Lima
                    </a>
                  </h2>
                  <div class="inline-block text-[0.8rem] text-[#343f52]">
                    <i class="fa-regular fa-calendar "></i>
                    Nail designer e pedicure
                  </div>
                </div>
              </article>
            </div>
<!--TRABALHADOR-->
          </div>
      </div>
      </div>
    </section>
    <!--A Nossa Equipa-->



    <section id="snippet-1" class="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid">
      <div class="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
          <div class="md:w-8/12 lg:w-6/12 xl:w-5/12 w-full !flex !flex-col items-center xl:!px-[35px] lg:!px-[20px] !px-[15px] !max-w-full !mt-[50px] xl:!order-2 lg:!order-2 !relative">
            <figure class="!rounded-[.4rem] z-[2] relative overflow-hidden">
              <video
                  autoplay
                  muted
                  loop
                  playsinline
                  class="!rounded-[.4rem] w-[70%] h-full object-cover"
              >
                <source src="/assets/media/VideoSobre.mp4" type="video/mp4">
              </video>
            </figure>
          </div>
          <!--/column -->
          <div class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h2 class="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 text-black">
              Sobre a <span class="!text-[#4C692E]">nüa</span>.
            </h2>
            <p class="lead !text-[1.05rem] !leading-[1.6] font-medium">
              A nüa. nasceu da paixão pela estética de precisão e pelo compromisso com a beleza natural e duradoura.
              Somos um espaço especializado em realçar a sua expressividade e confiança através do cuidado meticuloso do olhar e dos detalhes.</p>

            <p class="!mb-6">Acreditamos que a verdadeira beleza reside na individualidade. Por isso, cada serviço desde o design de
              sobrancelhas e o lash lifting até à manutenção programada é executado com técnicas avançadas e produtos de excelência, garantindo resultados definidos e com longevidade.
              O nosso foco é simplificar a sua rotina, permitindo-lhe acordar todos os dias com a sua melhor versão.</p>
            <div class="flex flex-wrap mx-[-15px] xl:mx-[-25px] !mt-[-30px]">
              <!--/column -->
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.container -->
      <!-- /.container -->
    </section>


  </div>
</template>
