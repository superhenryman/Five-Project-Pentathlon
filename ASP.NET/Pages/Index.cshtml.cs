using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ASP.NET_Confessions.Pages
{
    public class IndexModel : PageModel
    {
        public string? ConfessionText { get; set; }
        public string? ResultMessage { get; set; }
        
        public void OnPost()
        {
            if (string.IsNullOrEmpty(ConfessionText))
            {
                ResultMessage = "Confession can't be empty.";
                return;
            }
            ResultMessage = "Done!";
        }
    }
}
