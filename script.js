// creating a Model Class
var Appointment = Backbone.Model.extend({});
//creating Model Instance
var appointment = new Appointment({
	title:'dentist Appointment'
});
//creating a View Class
var AppointmentView = Backbone.View.extend({
	el: '.intro',
	render:function() {
	this.model.set({title:'knee injury Appointment'});
		$(this.el).html(this.model.get('title'));
	}
});
//creating a View Instance
var appointmentView = new AppointmentView({
	model : appointment,
});
appointmentView.render();
//console.log(appointmentView.el);
