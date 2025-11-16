<script setup lang="ts">
import { onMounted } from 'vue'

// Desliga SSR só para esta página
definePageMeta({
  ssr: false
})

// Inicializa o template depois que o Nuxt monta
onMounted(() => {
  if (typeof window !== 'undefined' && window.theme) {
    window.theme.init && window.theme.init()
  }
})
</script>

<template>
<!--  BANNER-->
  <section class="wrapper image-wrapper bg-image bg-overlay !bg-fixed bg-no-repeat bg-bottom bg-cover relative z-0 before:content-['']
before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
           data-image-src="/assets/img/Escritoriounhas.jpeg" style="background-image: url(&quot;/assets/img/Escritoriounhas.jpeg&quot;);">
    <div class="container py-[8rem]">
      <div class="flex flex-wrap mx-[-15px]">
        <div class="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
          <h3 class="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-6 !text-white xxl:!pr-32">
            Marque connosco a sua Sessão de Beleza</h3>
          <a href="https://www.picktime.com/nua" class="btn btn-white !rounded-[.4rem] !text-[.85rem] !mb-0 whitespace-nowrap">Agendar</a>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!--  BANNER-->

<div class="grow shrink-0">

  <!--SOBRANCELHAS-->
  <section id="sobrancelhas" class="wrapper !bg-[#ffffff]  angled upper-end relative border-0
     before:top-[-4rem] before:content-[''] before:block before:absolute before:z-0 before:border-l-transparent
     before:border-r-[100vw] before:border-t-[4rem] before:border-y-transparent before:border-[#fefefe] before:border-0
     before:border-solid before:right-0 after:content-[''] after:block after:absolute after:z-0 after:border-y-transparent
     after:border-[#fefefe] after:border-0 after:border-solid after:right-0">
    <div class="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
      <div class="flex flex-wrap mx-[-15px] !mt-[1rem]">
        <div
            class="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
          <h3 class="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-10">Sobrancelhas</h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="swiper-container grid-view relative !z-10 swiper-container-1" data-margin="30" data-dots="true"
           data-items-xl="3" data-items-md="2" data-items-xs="1">
        <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div class="swiper-wrapper" id="swiper-wrapper-59c79dce53760df2" aria-live="off"
               style="cursor: grab; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
            <!--/.swiper-slide -->
            <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="1 / 4">
              <figure class="w-[80%] sm:w-[250px] h-[250px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                <img
                    class="!rounded-[.4rem] w-full h-full object-cover"
                    src="/assets/img/browlamination.jpeg"
                    srcset="/assets/img/browlamination.jpeg 2x"
                    alt="image"
                >
                <a
                    class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                    href="/assets/img/browlamination.jpeg"
                    data-glightbox=""
                    data-gallery="projects-group"
                >
                  <i class="uil uil-focus-add before:content-['\eb22']"></i>
                </a>
              </figure>


              <div class="project-details flex flex-col items-center">
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                      Brow Lamination
                    </a>
                  </h2>
                  <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                    Sobrancelhas alinhadas e naturalmente levantadas
                  </div>
                </div>
              </div>
            </div>
            <!--/.swiper-slide -->

            <!--/.swiper-slide -->
            <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="2 / 4">
              <figure class="w-[80%] sm:w-[250px] h-[250px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                <img
                    class="!rounded-[.4rem] w-full h-full object-cover"
                    src="/assets/img/designhena.jpg"
                    srcset="/assets/img/designhena.jpg 2x"
                    alt="image"
                >
                <a
                    class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                    href="/assets/img/designhena.jpg"
                    data-glightbox=""
                    data-gallery="projects-group"
                >
                  <i class="uil uil-focus-add before:content-['\eb22']"></i>
                </a>
              </figure>


              <div class="project-details flex flex-col items-center">
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                      Design com Henna
                    </a>
                  </h2>
                  <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                    Sobrancelhas definidas com cor temporária natural
                  </div>
                </div>
              </div>
            </div>
            <!--/.swiper-slide -->

            <!--/.swiper-slide -->
            <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="3 / 4">
              <figure class="w-[80%] sm:w-[250px] h-[250px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                <img
                    class="!rounded-[.4rem] w-full h-full object-cover"
                    src="/assets/img/designsobrancelha.jpg"
                    srcset="/assets/img/designsobrancelha.jpg 2x"
                    alt="image"
                >
                <a
                    class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                    href="/assets/img/designsobrancelha.jpg"
                    data-glightbox=""
                    data-gallery="projects-group"
                >
                  <i class="uil uil-focus-add before:content-['\eb22']"></i>
                </a>
              </figure>

              <div class="project-details flex flex-col items-center">
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                      Design de Sobrancelhas
                    </a>
                  </h2>
                  <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                    Formato perfeito para valorizar seu olhar
                  </div>
                </div>
              </div>
            </div>
            <!--/.swiper-slide -->

            <!--/.swiper-slide -->
            <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="4 / 4">
              <figure class="w-[80%] sm:w-[250px] h-[250px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                <img
                    class="!rounded-[.4rem] w-full h-full object-cover"
                    src="/assets/img/homem.png"
                    srcset="/assets/img/homem.png 2x"
                    alt="image"
                >
                <a
                    class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                    href="/assets/img/homem.png"
                    data-glightbox=""
                    data-gallery="projects-group"
                >
                  <i class="uil uil-focus-add before:content-['\eb22']"></i>
                </a>
              </figure>

              <div class="project-details flex flex-col items-center">
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                      Sobrancelhas Homem
                    </a>
                  </h2>
                  <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                    Sobrancelhas masculinas naturais e bem cuidadas
                  </div>
                </div>
              </div>
            </div>
            <!--/.swiper-slide -->
          </div>
          <!--/.swiper-wrapper -->
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        <!-- /.swiper -->
        <div class="swiper-controls !mt-10">
          <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button"
                    aria-label="Go to slide 1" aria-current="true"></span><span class="swiper-pagination-bullet"
                                                                                tabindex="0" role="button"
                                                                                aria-label="Go to slide 2"></span><span
              class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span
              class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span></div>
        </div>
      </div>
      <!-- /.swiper-container -->
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
  <!--/SOBRANCELHAS-->


<!--PESTANAS-->
  <section id="pestanas" class="wrapper !bg-[#ffffff]">
    <div class="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
      <div class="flex flex-wrap mx-[-15px] !mt-[1rem]">
        <div
            class="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
          <h3 class="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-10">Pestanas</h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="swiper-container grid-view relative !z-10 swiper-container-1" data-margin="30" data-dots="true"
           data-items-xl="3" data-items-md="2" data-items-xs="1">
        <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div class="swiper-wrapper" id="swiper-wrapper-59c79dce53760df2" aria-live="off"
               style="cursor: grab; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
            <!--/.swiper-slide -->
            <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="1 / 7">
              <figure class="w-[80%] sm:w-[250px] h-[250px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                <img
                    class="!rounded-[.4rem] w-full h-full object-cover"
                    src="/assets/img/volumebrasileiro.jpeg"
                    srcset="/assets/img/volumebrasileiro.jpeg 2x"
                    alt="image"
                >
                <a
                    class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                    href="/assets/img/volumebrasileiro.jpeg"
                    data-glightbox=""
                    data-gallery="projects-group"
                >
                  <i class="uil uil-focus-add before:content-['\eb22']"></i>
                </a>
              </figure>

              <div class="project-details flex flex-col items-center">
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                      Volume Brasileiro
                    </a>
                  </h2>
                  <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                    Volume mais leve
                  </div>
                </div>
              </div>
            </div>
            <!--/.swiper-slide -->

            <!--/.swiper-slide -->
            <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="2 / 7">
              <figure class="w-[80%] sm:w-[250px] h-[250px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                <img
                    class="!rounded-[.4rem] w-full h-full object-cover"
                    src="/assets/img/volumeegipcio.jpeg"
                    srcset="/assets/img/volumeegipcio.jpeg 2x"
                    alt="image"
                >
                <a
                    class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                    href="/assets/img/volumeegipcio.jpeg"
                    data-glightbox=""
                    data-gallery="projects-group"
                >
                  <i class="uil uil-focus-add before:content-['\eb22']"></i>
                </a>
              </figure>

              <div class="project-details flex flex-col items-center">
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                      Volume Egípcio
                    </a>
                  </h2>
                  <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                    Volume com fios delicados
                  </div>
                </div>
              </div>
            </div>
            <!--/.swiper-slide -->

            <!--/.swiper-slide -->
            <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="3 / 7">
              <figure class="w-[80%] sm:w-[250px] h-[250px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                <img
                    class="!rounded-[.4rem] w-full h-full object-cover"
                    src="/assets/img/volumeluxo.jpeg"
                    srcset="/assets/img/volumeluxo.jpeg 2x"
                    alt="image"
                >
                <a
                    class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                    href="/assets/img/volumeluxo.jpeg"
                    data-glightbox=""
                    data-gallery="projects-group"
                >
                  <i class="uil uil-focus-add before:content-['\eb22']"></i>
                </a>
              </figure>

              <div class="project-details flex flex-col items-center">
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                      Volume Luxo
                    </a>
                  </h2>
                  <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                    Volume mais preenchido
                  </div>
                </div>
              </div>
            </div>
            <!--/.swiper-slide -->

            <!--/.swiper-slide -->
            <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="4 / 7">
              <figure class="w-[80%] sm:w-[250px] h-[250px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                <img
                    class="!rounded-[.4rem] w-full h-full object-cover"
                    src="/assets/img/volumefox.jpeg"
                    srcset="/assets/img/volumefox.jpeg 2x"
                    alt="image"
                >
                <a
                    class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                    href="/assets/img/volumefox.jpeg"
                    data-glightbox=""
                    data-gallery="projects-group"
                >
                  <i class="uil uil-focus-add before:content-['\eb22']"></i>
                </a>
              </figure>

              <div class="project-details flex flex-col items-center">
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                      Volume Fox Eyes
                    </a>
                  </h2>
                  <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                    Cantos alongados e puxados, efeito eyeliner
                  </div>
                </div>
              </div>
            </div>
            <!--/.swiper-slide -->

            <!--/.swiper-slide -->
            <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="5 / 7">
              <figure class="w-[80%] sm:w-[250px] h-[250px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                <img
                    class="!rounded-[.4rem] w-full h-full object-cover"
                    src="/assets/img/volumesirena.jpeg"
                    srcset="/assets/img/volumesirena.jpeg 2x"
                    alt="image"
                >
                <a
                    class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                    href="/assets/img/volumesirena.jpeg"
                    data-glightbox=""
                    data-gallery="projects-group"
                >
                  <i class="uil uil-focus-add before:content-['\eb22']"></i>
                </a>
              </figure>

              <div class="project-details flex flex-col items-center">
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                      Volume Sirena
                    </a>
                  </h2>
                  <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                    Efeito do meio dos olhos até aos cantos
                  </div>
                </div>
              </div>
            </div>
            <!--/.swiper-slide -->

            <!--/.swiper-slide -->
            <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="6 / 7">
              <figure class="w-[80%] sm:w-[250px] h-[250px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                <img
                    class="!rounded-[.4rem] w-full h-full object-cover"
                    src="/assets/img/browlamination.jpeg"
                    srcset="/assets/img/browlamination.jpeg 2x"
                    alt="image"
                >
                <a
                    class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                    href="/assets/img/browlamination.jpeg"
                    data-glightbox=""
                    data-gallery="projects-group"
                >
                  <i class="uil uil-focus-add before:content-['\eb22']"></i>
                </a>
              </figure>

              <div class="project-details flex flex-col items-center">
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                      Lifting de Pestanas
                    </a>
                  </h2>
                  <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                    Curva e realça a pestana natural.
                  </div>
                </div>
              </div>
            </div>
            <!--/.swiper-slide -->
          </div>
          <!--/.swiper-wrapper -->
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        <!-- /.swiper -->
        <div class="swiper-controls !mt-10">
          <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button"
                    aria-label="Go to slide 1" aria-current="true"></span><span class="swiper-pagination-bullet"
                                                                                tabindex="0" role="button"
                                                                                aria-label="Go to slide 2"></span><span
              class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span
              class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span></div>
        </div>
      </div>
      <!-- /.swiper-container -->
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
  <!--/PESTANAS-->

<!--MANICURE--> 
<section id="unhas" class="wrapper !bg-[#ffffff]">
  <div class="container py-24 xl:!py-[8rem]">
    <div class="flex flex-wrap mx-[-15px]">
      <div class="lg:w-8/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto text-center">
        
        <h3 class="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-10">
          Manicure
        </h3>

        <div class="text-center mx-auto max-w-md space-y-3">
          
          <h2 class="post-title h3">
            <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
              Aplicação Extensão de Gel
            </a>
          </h2>

          <h2 class="post-title h3">
            <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
              Manutenção Extensão de Gel
            </a>
          </h2>

          <h2 class="post-title h3">
            <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
              Remoção de Gel
            </a>
          </h2>

          <h2 class="post-title h3">
            <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
              Manicure + Verniz de Gel
            </a>
          </h2>

          <h2 class="post-title h3">
            <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
              Pedicure + Verniz de Gel
            </a>
          </h2>

          <h2 class="post-title h3">
            <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
              Spa dos Pés
            </a>
          </h2>

          <h2 class="post-title h3">
            <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
              Banho de Gel
            </a>
          </h2>

          <h2 class="post-title h3">
            <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
              Nail Art
            </a>
          </h2>

          <h2 class="post-title h3">
            <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
              Francesa
            </a>
          </h2>

        </div>

      </div>
    </div>
  </div>
</section>
<!--MANICURE-->



  <!--Depilação-->
  <section id="depilacao" class="wrapper !bg-[#ffffff]">
    <div class="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
      <div class="flex flex-wrap mx-[-15px] !mt-[1rem]">
        <div
            class="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
          <h3 class="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-10">Depilação</h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="swiper-container grid-view relative !z-10 swiper-container-1" data-margin="30" data-dots="true"
           data-items-xl="3" data-items-md="2" data-items-xs="1">
        <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div class="swiper-wrapper" id="swiper-wrapper-59c79dce53760df2" aria-live="off"
               style="cursor: grab; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
            <!--/.swiper-slide -->
            <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="1 / 1">
              <figure class="w-[80%] sm:w-[250px] h-[250px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                <img
                    class="!rounded-[.4rem] w-full h-full object-cover"
                    src="/assets/img/buco.png"
                    srcset="/assets/img/buco.png 2x"
                    alt="image"
                >
                <a
                    class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                    href="/assets/img/buco.png"
                    data-glightbox=""
                    data-gallery="projects-group"
                >
                  <i class="uil uil-focus-add before:content-['\eb22']"></i>
                </a>
              </figure>

              <div class="project-details flex flex-col items-center">
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                      Depilação Buço
                    </a>
                  </h2>
                  <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                      Com linha ou cera
                  </div>
                </div>
              </div>
            </div>
            <!--/.swiper-slide -->


          </div>
          <!--/.swiper-wrapper -->
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        <!-- /.swiper -->
        <div class="swiper-controls !mt-10">
          <div
              class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button"
                    aria-label="Go to slide 1" aria-current="true"></span><span class="swiper-pagination-bullet"
                                                                                tabindex="0" role="button"
                                                                                aria-label="Go to slide 2"></span><span
              class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span
              class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span></div>
        </div>
      </div>
      <!-- /.swiper-container -->
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
  <!--Depilação-->

  <!--MANICURE-->
  <section id="medicina" class="wrapper !bg-[#ffffff]">
    <div class="container py-24 xl:!py-[8rem]">
      <div class="flex flex-wrap mx-[-15px]">
        <div class="lg:w-8/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto text-center">

          <h3 class="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-10">
            Medicina Estética
          </h3>

          <div class="text-center mx-auto max-w-md space-y-3">

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Botox por área
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Botox full face
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Skinbooster Restylane
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Skinbooster NCT
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Preenchimento
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Preenchimento olheiras
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Lipo de papada
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Lipo enzimática (p/ área)
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Radiesse
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Sculptra
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Microagulhamento
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Peeling químico
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Peeling de Hollywood
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                PDRN
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Jato de plasma (blefaroplastia)
              </a>
            </h2>

            <h2 class="post-title h3">
              <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                Remoção de sinais
              </a>
            </h2>

          </div>

        </div>
      </div>
    </div>
  </section>
  <!--MANICURE-->

</div>
</template>
