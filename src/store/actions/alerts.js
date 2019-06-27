export class Alert {
    static CLICK_ALERT = 'ALERT_CLICKED'

    static alertClicked(payload){
        return{
            type: Alert.CLICK_ALERT,
            payload,
        }
    }
}