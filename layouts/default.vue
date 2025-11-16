<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function closeMenuAndNavigate(path) {
  // fecha o offcanvas via bootstrap
  const offcanvasEl = document.querySelector(".offcanvas.show");
  if (offcanvasEl && window.bootstrap) {
    const instance = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (instance) instance.hide();
  }

  // remove backdrop se existir
  document.querySelectorAll(".offcanvas-backdrop").forEach(el => el.remove());
  document.body.classList.remove("offcanvas-active");

  // navegar
  router.push(path)
}
</script>
<template>
  <div>
    <header class="relative !bg-[#edf2fc]">
      <nav class="navbar navbar-expand-lg classic transparent position-absolute navbar-dark caret-none">
        <div class="container xl:!flex-row lg:!flex-row !flex-nowrap items-center">

          <!-- LOGO -->
          <div class="navbar-brand w-full">
            <NuxtLink to="/">
              <img class="logo-dark !w-[6rem]" src="/assets/img/nomenua.png" alt="logo">
              <img class="logo-light !w-[6rem]" src="/assets/img/nomenua.png" alt="logo">
            </NuxtLink>
          </div>

          <!-- MENU -->
          <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">

            <!-- MOBILE HEADER -->
            <div class="offcanvas-header xl:!hidden lg:!hidden flex items-center justify-between flex-row p-6">
              <h3 class="!text-white">nüa.</h3>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>

            <!-- LINKS -->
            <div class="offcanvas-body xl:!ml-auto lg:!ml-auto flex flex-col !h-full">
              <ul class="navbar-nav">

                <li class="nav-item">
                  <a
                      class="nav-link"
                      @click="closeMenuAndNavigate('/')"
                  >
                    Início
                  </a>
                </li>

                <li class="nav-item">
                  <a
                      class="nav-link"
                      @click="closeMenuAndNavigate('/servicos')"
                  >
                    Serviços
                  </a>
                </li>

              </ul>



              <!-- FOOTER MOBILE -->
              <div class="offcanvas-footer xl:!hidden lg:!hidden">
                <div>
                  <br>
                  <a href="mailto:nuafamalicao@gmail.com" class="link-inverse">nuafamalicao@gmail.com</a><br>
                  <a href="tel:+351914748497">914 748 497</a><br>

                </div>
              </div>
            </div>
          </div>

          <!-- MOBILE TOGGLE -->
          <div class="navbar-other w-full !flex justify-end mr-[20px]">
            <ul class="navbar-nav !flex-row !items-center">
              <li class="nav-item xl:!hidden lg:!hidden">
                <button class="hamburger offcanvas-nav-btn"><span>
                </span>
                </button>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>


    <!-- Conteúdo da página -->
    <main>
      <slot />
    </main>
    <footer>
      <footer>
        <div class="container-fluid pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10">
          <footer>
            <div class="container pb-7">
              <div class="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 !mt-[-30px]">
                <div class="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 max-w-full !mt-[30px]">
                  <div class="">
                    <img class="!mb-4 w-[9rem]" src="@/public/assets/img/nomenua.png" srcset="@/public/assets/img/nomenua.png 2x" alt="image">
                  </div>
                  <div class="animate__animated animate__slideInUp animate__delay-3s">
                    <a
                        href="https://www.picktime.com/nua"
                        class="btn btn-lg
      bg-[#4C692E]             !text-[#4C692E]      !border-[#4C692E]    !border-[2px]

      hover:!text-[#4C692E]     hover:bg-[#4C692E]    hover:border-[#4C692E]

      focus:shadow-[rgba(255,255,255,1)]
      active:!text-[#4C692E] active:bg-[#4C692E] active:border-[#4C692E]
      disabled:text-[#4C692E] disabled:bg-transparent disabled:border-[#4C692E]
      !rounded-[50rem]">
                      Agendar agora</a>
                  </div>
                  <!-- /.widget -->
                </div>
                <!-- /column -->
                <div class="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] !mt-[30px]">
                  <div class="widget">
                    <div class="flex flex-row">
                      <div>
                        <div class="icon !text-[#4C692E] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                          <i class="uil uil-phone-volume before:content-['\ec50']"></i> </div>
                      </div>
                      <div>
                        <h5 class="!mb-1"></h5>
                        <p class="!mb-0"> <a href="tel:+351914748497">914 748 497</a></p>
                      </div>
                    </div>
                    <div class="widget">
                      <div class="flex flex-row">
                        <div>
                          <div class="icon !text-[#4C692E] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                            <i class="uil uil-envelope-alt before:content-['\eb34']"></i>
                          </div>
                        </div>
                        <div>
                          <h5 class="!mb-1"></h5>
                          <p class="!mb-0">
                            <a href="mailto:nuafamalicao@gmail.com" class=" hover:underline">nuafamalicao@gmail.com</a>
                          </p>
                        </div>
                    </div>
                      <div class="flex flex-row">
                        <div>
                          <div class="icon !text-[#4C692E] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]">
                            <i class="uil uil-clock text-xl text-[#4C692E]"></i>
                          </div>
                        </div>
                        <div>
                          <h5 class="!mb-1"></h5>
                          <p class="!mb-0">
                            <a> Das 9h até 17h</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!--/div -->
                  </div>
                  <!-- /.widget -->
                </div>
                <!-- /column -->
                <div class="xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:px-0 lg:px-0 max-w-full !mt-[30px]">
                  <div class="widget">
                    <div class="flex flex-row">
                      <div>
                        <div class="icon !text-[#4C692E] xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-4 !mt-[-0.25rem]"> <i class="uil uil-location-pin-alt before:content-['\ebd8']"></i> </div>
                      </div>
                      <div class="!self-start !justify-start">
                        <h5 class="!mb-1"></h5>
                        <address class=" not-italic !leading-[inherit] !mb-4">Rua Vasconcelos e Castro, n 88 4760-169, Vila Nova de Famalicão</address>
                      </div>
                    </div>
                    <!--/div -->
                  </div>
                  <!-- /.widget -->
                </div>
                <!-- /column -->
              </div>
              <!--/.row -->
            </div>
            <!-- /.container -->
          </footer>
        </div>
      </footer>
    </footer>
    <!-- /Footer -->
  </div>
</template>
<script setup lang="ts">
</script>