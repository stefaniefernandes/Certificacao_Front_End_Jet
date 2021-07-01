/**
 * JS - Detalhes do Produto
 * UI Detalhes do Produto, Quick View
 */
import { isMobile } from '../../functions/mobile';

$(document).ready(function () {

    /**
     * Inicia Botão Compre Junto
     */
    $(".ui.toggle.button.compre.junto").state({
        text: {
            inactive: '<i class="plus icon"></i>',
            active:   '<i class="checkmark icon"></i>'
        }
    });

    
    /*
    Funcao para ativar a aba avaliacao
    */
    $('.avaliacoes').on('click', function () {
        if ($('.item[data-tab="avaliacoes"]').length > 0){
            $('.item[data-tab="avaliacoes"]').click();
        }
    });

    $(document).on("click", ".avaliacoes", function(e){
        if ($('.item[data-tab="avaliacoes"]').length > 0){
            $('.item[data-tab="avaliacoes"]').click();
            $('html, body').animate({scrollTop: $(".menu.tabular .item").offset().top - 150}, 1000);
        }
    })

    if (!isMobile()) {
        /**
         * Semantic-UI Sticky
         * Box Compre Junto
         */
        $(".ui.sticky.comprar.junto").sticky({
            offset:  130,
            context: ".ui.rail.compre.junto"
        });

        $(".tabular.menu .item").tab({
            onVisible:function(){
                $(".ui.sticky.comprar.junto").sticky("refresh");
            }
        });
        /**
         * Semantic-UI Visibility
         * Detalhes do Produto Flutuante
         */
        $(".row.detalhes.produto").visibility({
            once:                  false,
            continuous:            true,
            onBottomPassed:        function () {
                $(".detalhes.produto.flutuante")
                    .addClass("ativo");
            },
            onBottomPassedReverse: function () {
                $(".detalhes.produto.flutuante")
                    .removeClass("ativo");
            }
        });

        $(".ui.container.footer").visibility({
            once:          false,
            continuous:    true,
            includeMargin: true,
            onTopVisible:  function () {
                $(".detalhes.produto.flutuante")
                    .removeClass("ativo");
            }
        });
        /**
         * Semantic-UI - PopUP
         * Popup de variação de produto no detalhe flutuante
         */
        $(".variacao.produto.button").popup({
            popup:    $(".variacao.produto.popup"),
            on:       'click',
            position: 'top center',
            inline:   true
        });

    }

});