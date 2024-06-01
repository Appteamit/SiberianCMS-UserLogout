<?php

$init = function($bootstrap) {
    Siberian_Module::addMenu('UserLogout', 'userlogout', 'User Logout',
        'userlogout/backoffice_userlogout_view', 'icofont icofont-logout');
};
