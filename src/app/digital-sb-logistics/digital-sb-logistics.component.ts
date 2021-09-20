import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VCard } from 'ngx-vcard';
import { MapsDataService } from '../services/maps-data.service';
@Component({
  selector: 'app-digital-sb-logistics',
  templateUrl: './digital-sb-logistics.component.html',
  styleUrls: ['./digital-sb-logistics.component.css']
})
export class DigitalSbLogisticsComponent implements OnInit {

  img: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  segment_name: string;
  whatsappMsg: string;
  whatsappPhone: string;
  functionPhone: string;
  functionWAPhone: string;
  functionWAMsg: string;
  whatsAppApiSrc: string;
  phoneSrc: string;
  emailSrc: string;
  facebookShare: string;
  twitterShare: string;
  linkedinShare: string;
  whatsappShare: string;

  fixedUrl: string;

  public vcard: VCard;
  openedWindow : number = 0; // alternative: array of numbers
  public mapData;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cardService: CardService, 
    private mapsData: MapsDataService,) { }

  ngOnInit(): void {
    this.mapData = this.mapsData.digitalSbLogistics();
    
    this.activatedRoute.params.subscribe(
      params => {
        // console.log(params.url);
        this.fixedUrl = 'sb-logistics/'+params.url;
        this.getUserInfo(this.fixedUrl);
      }
    )
  }
  
  openWindow(id) {
    this.openedWindow = id; // alternative: push to array of numbers
  }

  isInfoWindowOpen(id) {
      return this.openedWindow == id; // alternative: check if id is in array
  }

  getUserInfo(url){
    this.cardService.userDetail(url).subscribe(response => {
      if(response.results.length === 1){
        this.img = response.results[0].image;
        this.name = response.results[0].name;
        this.email = response.results[0].email;
        this.phone = response.results[0].phone;
        this.position = response.results[0].position;
        this.segment_name = response.results[0].segment_name;
        this.whatsappMsg = response.results[0].whatsappMessage;
        this.whatsappPhone = response.results[0].whatsappPhone;
        this.functionWAPhone = this.whatsappPhone.replace('+','');
        this.functionWAPhone = this.functionWAPhone.replace(/ /g, '');
        this.functionPhone = this.phone.replace('+','');
        this.functionPhone = this.functionPhone.replace(/ /g, '');
        this.functionWAMsg = this.whatsappMsg.replace(/ /g, '%20');
        this.whatsAppApiSrc = 'https://api.whatsapp.com/send?phone=' + this.functionWAPhone + '&text=' + this.functionWAMsg;
        this.phoneSrc = 'tel:' + this.functionPhone;
        this.emailSrc = 'mailto:'+ this.email;
        this.facebookShare = 'https://www.facebook.com/sharer/sharer.php?u=https%3A//sbgroup.com.mx/' + response.results[0].url;
        this.twitterShare = 'https://twitter.com/home?status=https%3A//sbgroup.com.mx/' + response.results[0].url;
        this.linkedinShare = 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A//sbgroup.com.mx/' + response.results[0].url + '&title=&summary=&source=';
        this.whatsappShare = 'https://api.whatsapp.com/send?text=http://sbgroup.com.mx/' + response.results[0].url;

        this.vcard = {
          photo: this.img,
          name: {
            firstNames: this.name,
            lastNames: '',
          },
          organization: this.segment_name,
          email:[
            this.email
          ],
          telephone:[
            {
              value: this.functionPhone,
              param: {
                type: 'work'
              }
            },
            {
              value: this.functionWAPhone,
              param: {
                type: 'cell'
              }
            }
          ]
        }
      }else{
        this.router.navigate(['/404.html'])
      }
    });
  }
}
