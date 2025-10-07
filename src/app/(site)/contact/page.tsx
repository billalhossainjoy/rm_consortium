import {Card, CardContent} from "@/components/ui/card"
import {Clock, Mail, MapPin, Phone} from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-slate-600 mb-8">
              Ready to transform your architectural vision into reality? Contact our expert team for consultation and
              project discussions.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <p className="text-slate-600 mb-8">
                  Reach out to us through any of the following channels. Our team is ready to assist you with your
                  architectural needs.
                </p>
              </div>

              <div className=" space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-cyan-100 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Office Address</h3>
                        <p className="text-slate-600">
                          100 Feet Road,57 Madani Avenue, Notun Bazar,
                          <br />
                          Vatara, Dhaka-1212, Bangladesh.
                          <br />
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-pink-100 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Phone Numbers</h3>
                        <p className="text-slate-600">
                          Office: +880 1711 313592
                          <br />
                          Office: +880 1747 256525
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-cyan-100 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Email Addresses</h3>
                        <p className="text-slate-600">
                          General: info@rmconsortium.com.bd
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-pink-100 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Business Hours</h3>
                        <p className="text-slate-600">
                          Sunday - Thursday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Friday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-cyan-50 to-pink-50 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-4">Why Choose RM Consortium?</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-600">15+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-600">200+</div>
                    <div className="text-sm text-slate-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-600">24h</div>
                    <div className="text-sm text-slate-600">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-600">100%</div>
                    <div className="text-sm text-slate-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
