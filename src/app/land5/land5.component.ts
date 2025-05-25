import { Component, ViewEncapsulation ,AfterViewInit, ElementRef, ViewChildren, QueryList} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { FacebookPixelService } from '../services/facebook-pixel-service.service';
@Component({
  selector: 'app-land5',
  templateUrl: './land5.component.html',
  styleUrls: ['./land5.component.css']
})
export class Land5Component {

dataH :any

  @ViewChildren('animatedSection') sections!: QueryList<ElementRef>;
constructor(
    private route: ActivatedRoute,public  fbPixel:FacebookPixelService
    // private landingService: LandingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id=="1") {
    
        this.dataH={
  "hero": {
    "logo": "https://www.heart-of-carthage-dubai.com/assets/img/logo.png",
    "title": "مرحباً بكم في منصتنا",
    "back":"https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80",
    "subtitle": "🔥  🔥  🔥",
    "description": "إكتشف منتوجنا الجديد",
    "cta": {
      "text": "ابدأ الآن",
      "icon": "↓",
      "color":"red"
    }
  },
  "about": {
    "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    "text": "نحن فريق مميز يهدف إلى تقديم أفضل الخدمات الرقمية لعملائنا الكرام. نعمل بجد لضمان جودة المحتوى والتصميم والتجربة الكاملة للمستخدم.",
    "points": [
      "جودة عالية في تقديم الخدمات",
      "دعم تقني متواصل",
      "فريق محترف ومؤهل",
      "أسعار تنافسية"
    ]
  },
  "video_features": {
    "title": "تكنولوجيا ذكية لخدمتك",
    "features": [
      {
        "icon": "fa-microchip",
        "title": "شاشة لمس ذكية",
        "description": "تحكم كامل في الإعدادات، برامج التدريب، الموسيقى، والبيانات مباشرة من الشاشة الذكية."
      },
      {
        "icon": "fa-cogs",
        "title": "نظام راحة متطور",
        "description": "راحة استثنائية بفضل نظام امتصاص الصدمات ومرونة سطح الجري حسب ذوقك."
      }
    ],
    "video": {
      "src": "assets/videos/demo.mp4",
      "poster": "assets/images/poster.jpg"
    }
  },
  "gallery": {
    "title": "شوف بعض صور المنتوج من زوايا مختلفة",
    "description": "صور حقيقية 100%، تم تصويرها من عملائنا في تونس. الجودة واضحة والخدمة مضمونة.",
    "images": [
      "https://img.freepik.com/psd-premium/arriere-plan-vitrine-du-produit_597316-255.jpg?semt=ais_hybrid&w=740",
      "https://img.freepik.com/psd-premium/arriere-plan-vitrine-du-produit_597316-255.jpg?semt=ais_hybrid&w=740",
      "https://img.freepik.com/psd-premium/arriere-plan-vitrine-du-produit_597316-255.jpg?semt=ais_hybrid&w=740",
      "https://img.freepik.com/psd-premium/arriere-plan-vitrine-du-produit_597316-255.jpg?semt=ais_hybrid&w=740",
      "https://img.freepik.com/psd-premium/arriere-plan-vitrine-du-produit_597316-255.jpg?semt=ais_hybrid&w=740",
      "https://img.freepik.com/psd-premium/arriere-plan-vitrine-du-produit_597316-255.jpg?semt=ais_hybrid&w=740"
    ]
  },
  "footer": {
    "text": "© 2025 جميع الحقوق محفوظة - منصتنا الرقمية",
    "social": {
      "facebook": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
      "instagram": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
      "tiktok": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
    }
  },
  "pixels": {
  "facebook": ["1766536320768300"]
}
}
    const pixels = this.dataH?.pixels?.facebook;

  if (Array.isArray(pixels) && pixels.length) {
    this.fbPixel.init(pixels);
  }
      }

    });
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // stop observing once visible
        }
      });
    }, {
      threshold: 0.1
    });

    this.sections.forEach(section => observer.observe(section.nativeElement));
  }
}
