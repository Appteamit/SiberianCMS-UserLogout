<?php

/**
 * Class UserLogout_Backoffice_Userlogout_ViewController
 */
class UserLogout_Backoffice_Userlogout_ViewController extends Backoffice_Controller_Default
{
    
    public function loadAction()
    {
       

        $payload = [
            'title' => __('User Logout Session'),
            'icon' => 'icofont icofont-logout',
        ];

        $this->_sendJson($payload);
    }

     /**
     *
     */
    public function savebackofficeAction ()
    {
        try {
            $request = $this->getRequest();
            $params = Siberian_Json::decode($request->getRawBody());

                $db = Zend_Db_Table::getDefaultAdapter();
                $status = $db->query('TRUNCATE TABLE `session`');

                $payload = [
                    'success' => true,
                    'message' => __('Logout successfully!'),
                    'status' => $status
                ];
            
        } catch (Exception $e) {
            $payload = [
                'error' => true,
                'error_msg' => $e->getMessage(), 
                'message' => __('An unknown error occurred, please try again later.')
            ];
        }
        $this->_sendJson($payload);
    }

}