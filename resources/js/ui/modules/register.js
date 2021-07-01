/**
 * Client Register View
 */


import{formSettings} from "../starters/formManipulation";

import {hideADDR, showADDR, showProfile, hideProfile} from "../../functions/form-control";

require("../../functions/jetCorreios");


$(document).ready(function () {
    hideProfile(".pessoa.juridica");
    hideADDR();

    $("#registro_cliente").form(formSettings);    

    function buscaCep(element, id) {
        let options = {
            inputSelector: {
                logradouro: "input[name='Address[" + id + "].StreetAddress']",
                bairro: "input[name='Address[" + id + "].Neighbourhood']",
                localidade: "input[name='Address[" + id + "].City']",
                numero: "input[name='Address[" + id + "].Number']",
                complemento: "input[name='Address[" + id + "].Complement']",
                uf: {
                    input: `#estado_${id}`,
                    isDropDown: true,
                    changing: function (uf) {
                        "use strict";
                        $(`#estado_${id}`).dropdown("set selected", uf);

                        if ($(".form.jet.checkout").length === 1) {
                            $(`#estado_${id}`).closest(".field").addClass("success").data("jet-active", true);
                            $(`#estado_${id}`).siblings("input.search").blur();
                        }
                    },
                    loading: function (text) {
                        $("#estado_" + id + "").dropdown("set text", text);
                    },
                    clearing: function () {
                        $("#estado_" + id + "").dropdown("clear");
                    }
                },
                onError: function () {

                }
            }
        };
        $(element).buscaCep(options);
    }


    $("input[name='Address[0].ZipCode']").mask('00000-000').on("keyup", function() {        
        if($(this).cleanVal().split('').length === 8) {
            buscaCep($(this), 0);
        }
    });

    $("input[name='Address[1].ZipCode']").mask('00000-000').on("keyup", function() {
        if($(this).cleanVal().split('').length === 8) {
            buscaCep($(this), 1);
        }
    });


    $("#registro_cliente .endereco.igual").checkbox({
        onChecked: function () {
            hideADDR(true);
        },
        onUnchecked: function () {
            showADDR(true);
        }
    });

    $(".tipo.cliente").dropdown('set selected', ($("#TypeCustomer").length > 0 ? $("#TypeCustomer").val() : 0))
        .dropdown({
            allowReselection: true,
            action: 'activate',
            onChange: function (value) {
                switch (value) {
                    case "0":
                        hideProfile(".pessoa.juridica");
                        showProfile(".pessoa.fisica");
                        break;
                    case "1":
                        hideProfile(".pessoa.fisica");
                        showProfile(".pessoa.juridica");
                        break;
                }
            }
        });

    if($("#TypeCustomer").length > 0){
        if($("#TypeCustomer").val() > 0) {
            hideProfile(".pessoa.fisica");
            showProfile(".pessoa.juridica");
        }
    }
    
});