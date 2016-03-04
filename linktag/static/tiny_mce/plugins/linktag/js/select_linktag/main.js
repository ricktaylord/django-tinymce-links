define(["jquery", "jquery-ui/autocomplete"], function($) {
    $(function() {
        
        function reset_widgets() {
            $()
        }

        function get_widget(type) {
            return $("#link_"+type+"_select");
        }

        function set_widget(type,val) {
            var $select = get_widget(type);
            $select.val(val);
        }

        function populate_widget(type, data) {
            var $select = get_widget(type);
            $select.find("option").remove();
            $select.append('<option value="-">--- None selected ---</option>')
            $.each(data, function(key, val) {
                $select.append('<option value=' + val.pk + '>' + val.name + '</option>');
            });
        }

        function hide_widget(type) {
            var $select = get_widget(type);
            $select.prop("disabled", true);            
        }

        function show_widget(type) {
            var $select = get_widget(type);
            $select.prop("disabled", false);
        }

        function reset_widgets() {
            $("#link_ref").val("");
            $.each(["module", "lesson", "question"], function(i, s) {
                //var $select = get_widget(s);
                populate_widget(s, {});
                hide_widget(s);
            });
            var $select = get_widget("topic");
            $select.val("-");
        }

     
        function update_widgets() {
            var levels = ["topic",
                        "module",
                        "lesson",
                        "question"];
            var vals = [];
            var current_data = learning_structure;

            $.each(levels, function(i, s) {
                e = get_widget(s);
                var v = e.val();
                if( v != "-" || vals.length ) {
                    if( v != "-" ) {
                        vals.push(v);
                        populate_widget(s, current_data);
                        show_widget(s);
                        var new_data = [];
                        e.val("-");
                        $.each(current_data, function(i, el) {
                            if(el.pk == v) {
                                new_data = el.children;
                                e.val(v);
                            }
                        });
                        current_data = new_data;
                    } else {
                        populate_widget(s, current_data);
                        set_widget(s, "-");
                        if( current_data.length>0 ) {
                            show_widget(s);
                        }
                        current_data = [];
                    }
                }
            });
            $("#link_ref").val(vals.join(":"));
        }

        var learning_structure = {};
        
        $.getJSON("/structure/get", function( data ) {
            learning_structure = data;
            populate_widget("topic", learning_structure);
            reset_widgets();
        });
               
        $( "select.learning_object" ).change(update_widgets);
    });
});