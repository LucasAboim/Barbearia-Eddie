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
            Marque connosco a sua coisa</h3>
          <a href="tel:+351928156107" class="btn btn-white !rounded-[.4rem] !text-[.85rem] !mb-0 whitespace-nowrap">
            Agendar
          </a>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!--  BANNER-->

  <div class="grow shrink-0">

<!-- BOTÕES-->
    <section class="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid angled upper-end relative border-0
     before:top-[-4rem] before:content-[''] before:block before:absolute before:z-0 before:border-l-transparent
     before:border-r-[100vw] before:border-t-[4rem] before:border-y-transparent before:border-[#fefefe] before:border-0
     before:border-solid before:right-0 after:content-[''] after:block after:absolute after:z-0 after:border-y-transparent
     after:border-[#fefefe] after:border-0 after:border-solid after:right-0">
      <div class="container py-12">
        <ul class="pl-0 list-none  !mb-0">
          <li class="inline-block !mr-1 !mb-2"><a class="btn btn-soft-ash btn-sm rounded " href="/docs/blocks/about">Serviços</a></li>
          <li class="inline-block !mr-1 !mb-2"><a class="btn btn-soft-ash btn-sm rounded " href="/docs/blocks/blog">Produtos</a></li>
          <li class="inline-block !mr-1 !mb-2"><a class="btn btn-soft-ash btn-sm rounded " href="/docs/blocks/call-to-action">Horário</a></li>
          <li class="inline-block !mr-1 !mb-2"><a class="btn btn-soft-ash btn-sm rounded " href="/docs/blocks/call-to-action">Cenas</a></li>
        </ul>
      </div>
      <!-- /.container -->
    </section>


    <!--SERIÇOS-->
    <section id="servicos" class="wrapper !bg-[#ffffff]">
      <div class="container py-24 xl:!py-[8rem]">
        <div class="flex flex-wrap mx-[-15px]">
          <div class="lg:w-8/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto text-center">

            <h3 class="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-10">
              Serviços
            </h3>

            <div class="text-center mx-auto max-w-md space-y-3">

              <h2 class="post-title h3">
                <a class="!text-[#343f52] hover:!text-[#d4af37] no-underline">
                  Pedicure
                </a>
              </h2>

              <h2 class="post-title h3">
                <a class="!text-[#343f52] hover:!text-[#d4af37] no-underline">
                  Massagens
                </a>
              </h2>

              <h2 class="post-title h3">
                <a class="!text-[#343f52] hover:!text-[#d4af37] no-underline">
                  Depilação
                </a>
              </h2>

              <h2 class="post-title h3">
                <a class="!text-[#343f52] hover:!text-[#d4af37] no-underline">
                  Rosto
                </a>
              </h2>


            </div>

          </div>
        </div>
      </div>
    </section>
    <!--SERIÇOS-->


    <!--Produtos-->
    <section id="produtos" class="wrapper !bg-[#ffffff]  c">
      <div class="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
        <div class="flex flex-wrap mx-[-15px] !mt-[1rem]">
          <div
              class="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h3 class="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-10">Produtos</h3>
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
              <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="1 / 5">
                <figure class="w-[80%] sm:w-[250px] h-[500px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                  <img
                      class="!rounded-[.4rem] w-full h-full object-cover"
                      src="/assets/img/vidas.jpg"
                      srcset="/assets/img/vidas.jpg 2x"
                      alt="image"
                  >
                  <a
                      class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                      href="/assets/img/vidas.jpg"
                      data-glightbox=""
                      data-gallery="projects-group"
                  >
                    <i class="uil uil-focus-add before:content-['\eb22']"></i>
                  </a>
                </figure>


                <div class="project-details flex flex-col items-center">
                  <div class="post-header">
                    <h2 class="post-title !-mt-1 h3">
                      <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                        Champô
                      </a>
                    </h2>
                    <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                      20€
                    </div>
                  </div>
                </div>
              </div>
              <!--/.swiper-slide -->
              0
              <!--/.swiper-slide -->
              <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="2 / 5">
                <figure class="w-[80%] sm:w-[250px] h-[500px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                  <img
                      class="!rounded-[.4rem] w-full h-full object-cover"
                      src="/assets/img/vidas.jpg"
                      srcset="/assets/img/vidas.jpg 2x"
                      alt="image"
                  >
                  <a
                      class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                      href="/assets/img/vidas.jpg"
                      data-glightbox=""
                      data-gallery="projects-group"
                  >
                    <i class="uil uil-focus-add before:content-['\eb22']"></i>
                  </a>
                </figure>


                <div class="project-details flex flex-col items-center">
                  <div class="post-header">
                    <h2 class="post-title !-mt-1 h3">
                      <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                        Champô
                      </a>
                    </h2>
                    <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                      20€
                    </div>
                  </div>
                </div>
              </div>
              <!--/.swiper-slide -->

              <!--/.swiper-slide -->
              <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="3 / 5">
                <figure class="w-[80%] sm:w-[250px] h-[500px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                  <img
                      class="!rounded-[.4rem] w-full h-full object-cover"
                      src="/assets/img/vidas.jpg"
                      srcset="/assets/img/vidas.jpg 2x"
                      alt="image"
                  >
                  <a
                      class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                      href="/assets/img/vidas.jpg"
                      data-glightbox=""
                      data-gallery="projects-group"
                  >
                    <i class="uil uil-focus-add before:content-['\eb22']"></i>
                  </a>
                </figure>


                <div class="project-details flex flex-col items-center">
                  <div class="post-header">
                    <h2 class="post-title !-mt-1 h3">
                      <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                        Champô
                      </a>
                    </h2>
                    <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                      20€
                    </div>
                  </div>
                </div>
              </div>
              <!--/.swiper-slide -->

              <!--/.swiper-slide -->
              <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="4 / 5">
                <figure class="w-[80%] sm:w-[250px] h-[500px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                  <img
                      class="!rounded-[.4rem] w-full h-full object-cover"
                      src="/assets/img/vidas.jpg"
                      srcset="/assets/img/vidas.jpg 2x"
                      alt="image"
                  >
                  <a
                      class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                      href="/assets/img/vidas.jpg"
                      data-glightbox=""
                      data-gallery="projects-group"
                  >
                    <i class="uil uil-focus-add before:content-['\eb22']"></i>
                  </a>
                </figure>


                <div class="project-details flex flex-col items-center">
                  <div class="post-header">
                    <h2 class="post-title !-mt-1 h3">
                      <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                        Champô
                      </a>
                    </h2>
                    <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                      20€
                    </div>
                  </div>
                </div>
              </div>
              <!--/.swiper-slide -->

              <!--/.swiper-slide -->
              <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="5 / 5">
                <figure class="w-[80%] sm:w-[250px] h-[500px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                  <img
                      class="!rounded-[.4rem] w-full h-full object-cover"
                      src="/assets/img/vidas.jpg"
                      srcset="/assets/img/vidas.jpg 2x"
                      alt="image"
                  >
                  <a
                      class="item-link absolute w-[2.2rem] h-[2.2rem] !leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 !text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                      href="/assets/img/vidas.jpg"
                      data-glightbox=""
                      data-gallery="projects-group"
                  >
                    <i class="uil uil-focus-add before:content-['\eb22']"></i>
                  </a>
                </figure>


                <div class="project-details flex flex-col items-center">
                  <div class="post-header">
                    <h2 class="post-title !-mt-1 h3">
                      <a class="!text-[#343f52] hover:!text-[#4C692E] no-underline">
                        Champô
                      </a>
                    </h2>
                    <div class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]">
                      20€
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
    <!--/Produtos-->

    <!--Trabalhos-->
    <div id="trabalhos">
    <div class="flex flex-wrap mx-[-15px] !mt-[1rem]">
      <div
          class="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
        <h3 class="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-10">Trabalhos</h3>
      </div>
      <!-- /column -->
    </div>
    <section id="horarios"  class="wrapper image-wrapper bg-image bg-overlay !text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
             data-image-src="./assets/img/barbearia.jpg">

      <div class="container py-[1rem] xl:!py-[2rem] lg:!py-[2rem] md:!py-[2rem] !text-center">
      <div class="flex flex-wrap mx-[-15px] !mt-3">
          <div class="xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">

            <!--CARDS-->
            <!--Produtos-->
              <div class="container py-2 xl:!py-[1rem] lg:!py-[1rem] md:!py-[1rem]">
                <!-- /.row -->
                <div class="swiper-container grid-view relative !z-10 swiper-container-1" data-margin="30" data-dots="true"
                     data-items-xl="3" data-items-md="2" data-items-xs="1">
                  <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                    <div class="swiper-wrapper" id="swiper-wrapper-59c79dce53760df2" aria-live="off"
                         style="cursor: grab; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">

                      <!--/.swiper-slide -->
                      <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="1 / 5">
                        <figure class="w-[80%] sm:w-[250px] h-[500px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                          <img
                              class="!rounded-[.4rem] w-full h-full object-cover"
                              src="/assets/img/vidas.jpg"
                              alt="image"
                          >
                        </figure>
                      </div>
                      <!--/.swiper-slide -->

                      <!--/.swiper-slide -->
                      <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="1 / 5">
                        <figure class="w-[80%] sm:w-[250px] h-[500px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                          <img
                              class="!rounded-[.4rem] w-full h-full object-cover"
                              src="/assets/img/vidas.jpg"
                              alt="image"
                          >
                        </figure>
                      </div>
                      <!--/.swiper-slide -->

                      <!--/.swiper-slide -->
                      <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="1 / 5">
                        <figure class="w-[80%] sm:w-[250px] h-[500px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                          <img
                              class="!rounded-[.4rem] w-full h-full object-cover"
                              src="/assets/img/vidas.jpg"
                              alt="image"
                          >
                        </figure>
                      </div>
                      <!--/.swiper-slide -->

                      <!--/.swiper-slide -->
                      <div class="swiper-slide group flex flex-col items-center text-center px-4 sm:px-0 " aria-label="1 / 5">
                        <figure class="w-[80%] sm:w-[250px] h-[500px] !rounded-[.4rem] !mb-4 relative overflow-hidden">
                          <img
                              class="!rounded-[.4rem] w-full h-full object-cover"
                              src="/assets/img/vidas.jpg"
                              alt="image"
                          >
                        </figure>
                      </div>
                      <!--/.swiper-slide -->
                    </div>
                    <!--/.swiper-wrapper -->
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                  <!-- /.swiper -->
                  <div class="swiper-controls !mt-10">
                    <div
                        class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span class="swiper-pagination-bullet" tabindex="0" role="button"
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
            <!--/Produtos-->
            <!--/CARDS-->

          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    </div>
    <!--/Trabalhos-->


  </div>
</template>